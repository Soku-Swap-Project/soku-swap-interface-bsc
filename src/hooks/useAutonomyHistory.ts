import Moralis from 'moralis';

import { useCallback, useEffect, useState } from 'react'
import { utils } from 'ethers'
import { useActiveWeb3React } from 'hooks';
import { ROUTER_ADDRESS } from '../constants'

export default function useTransactionHistory() {


Moralis.initialize('BLHKY0nn6mL9HtcCnfXDjnfY3xOay6KEAXbKGY9u');

Moralis.serverURL = 'https://tc2cagkjxavv.bigmoralis.com:2053/server'

const [orders, setOrders] = useState<Array<any>>([]);
const [cancels, setCancels] = useState<Array<any>>([]);
const { account } = useActiveWeb3React();

	const canCancel = useCallback((orderId: any) => {
		const cancelArr: any = []
		const executedArr: any = []
		cancels.forEach((cancel: any ) => {
			if(!cancel.get('wasExecuted')){
				cancelArr.push(cancel.get('uid'))
			} else {
				executedArr.push(cancel.get('uid'))
			}
		});

		if(cancelArr.includes(orderId)){
			return 'cancelled'
		}
		if(executedArr.includes(orderId)){
			return 'executed'
		} 
		return 'open'
	}, [cancels])

	const parseOrders = useCallback((allOrders: any[]) => {
		return allOrders.map((order: any) => ({
			method: methodSelector(order.get('callData')),
			callData: order.get('callData'),
			time: order.get('block_timestamp').toUTCString(),
			id: order.get('uid'),
			inputToken: findInputToken(order.get('callData')),
			outputToken: findOutPutToken(order.get('callData')),
			inputAmount: findInputAmount(order.get('callData'), order.get('ethForCall')),
			outputAmount: findOutputAmount(order.get('callData')),
			requester: order.get('user'),
			target: order.get('target'),
			referer: order.get('referer'),
			initEthSent: order.get('initEthSent'),
			ethForCall: order.get('ethForCall'),
			verifySender: order.get('verifyUser'),
			payWithAuto: order.get('payWithAUTO'),
			typeof: typeSelector(order.get('callData')),
			insertFeeAmount: order.get('insertFeeAmount'),
			status: canCancel(order.get('uid'))
		})).filter((order: any) => order.callData.includes(ROUTER_ADDRESS.toLowerCase().substr(2)))
	}, [canCancel])


	function methodSelector(orderData: any){
		const sliced = orderData.slice(0, 10)
		if (sliced === "0xfa089c19") return "Limit -> Tokens for Matic"
		if (sliced === "0xbc63cf67") return "Limit -> Matic for Tokens"
		if (sliced === "0x9078cf66") return "Limit -> Tokens for Tokens"
		if (sliced === "0x503bd854") return "Stop -> Tokens for Tokens"
		if (sliced === "0xe2c691a8") return "Stop -> Matic for Tokens"
		if (sliced === "0x4632bf0d") return "Stop -> Tokens for Matic"
		return "Undefined Method"
	}
	
	function typeSelector(orderData: any) {
		const sliced = orderData.slice(0, 10)
		if (sliced === "0xfa089c19") return "Limit"
		if (sliced === "0xbc63cf67") return "Limit"
		if (sliced === "0x9078cf66") return "Limit"
		if (sliced === "0x503bd854") return "Stop"
		if (sliced === "0xe2c691a8") return "Stop"
		if (sliced === "0x4632bf0d") return "Stop"
		return "Undefined"
	}	
	
	function findOutputAmount(callData: any) {
		const sliced = callData.slice(0, 10)
		const actualData = `0x${callData.slice(10, callData.length + 1)}`
		let decoded: any
		let ret = ''
		if (sliced === "0xbc63cf67") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'address[]' ,' address','uint256'], actualData)
			ret = decoded[1].toString()
		} else if (sliced === "0xfa089c19") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[3].toString()
		} else if (sliced === "0x9078cf66") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[3].toString();
		} else if (sliced === "0x503bd854") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4].toString();
		} else if (sliced === "0xe2c691a8") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[2].toString();
		} else if (sliced === "0x4632bf0d") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256', 'uint256', 'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4].toString();
		}
		return ret
	}
	
	function findInputAmount(callData: any, ethForCall: any) {
		const sliced = callData.slice(0, 10)
		const actualData = `0x${callData.slice(10, callData.length + 1)}`
		let decoded: any
		let ret = ''
		if (sliced === "0xbc63cf67") {
			ret = ethForCall
		} else if (sliced === "0xfa089c19") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[2].toString()
		} else if (sliced === "0x9078cf66") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[2].toString()
			// STOP LOSS TOKEN TO TOKEN
		} else if (sliced === "0x503bd854") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[2].toString()
		} else if (sliced === "0xe2c691a8") {
			ret = ethForCall
		} else if (sliced === "0x4632bf0d") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256', 'uint256', 'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[2].toString()
		}
		return ret
	}
	
	function findOutPutToken(callData: any) {
		const sliced = callData.slice(0, 10)
		const actualData = `0x${callData.slice(10, callData.length+1)}`
		let decoded: any
		let ret = ''
		if (sliced === "0xbc63cf67") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'address[]' ,' address','uint256'], actualData)
			ret = decoded[2][decoded[2].length - 1]
		} else if (sliced === "0xfa089c19") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4][decoded[4].length - 1]
		} else if (sliced === "0x9078cf66") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4][decoded[4].length - 1]
		} else if (sliced === "0x503bd854") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[5][decoded[5].length - 1]
		} else if (sliced === "0xe2c691a8") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[3][decoded[3].length  - 1]
		} else if (sliced === "0x4632bf0d") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256', 'uint256', 'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[5][decoded[5].length - 1]
		}
		return ret
	}
	
	function findInputToken(callData: any) {
		const sliced = callData.slice(0, 10)
		const actualData = `0x${callData.slice(10, callData.length + 1)}`
		let decoded: any
		let ret = ''
		if (sliced === "0xbc63cf67") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'address[]' ,' address','uint256'], actualData)
			ret = decoded[2][0]
		} else if (sliced === "0xfa089c19"){
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4][0]
		} else if (sliced === "0x9078cf66"){
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','address[]', 'address', 'uint256'], actualData) 
			ret = decoded[4][0]
		}	else if (sliced === "0x503bd854") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256' ,'uint256','uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[5][0];
		} else if (sliced === "0xe2c691a8") {
			decoded = utils.defaultAbiCoder.decode(['address', 'uint256' ,'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[3][0];
		} else if (sliced === "0x4632bf0d") {
			decoded = utils.defaultAbiCoder.decode(['address', 'address' ,'uint256', 'uint256', 'uint256', 'address[]', 'address', 'uint256'], actualData) 
			ret = decoded[5][0];
		}
		return ret
	} 

	useEffect(() => {
		async function init() {
			const queryRequests = new Moralis.Query("RegistryRequests");
			const queryCancels = new Moralis.Query("RegistryCancelRequests");
			queryRequests.equalTo("user", account);
			const registryRequests = await queryRequests.find();
			const registryCancelRequests = await queryCancels.find();
			setOrders(parseOrders(registryRequests))
			setCancels(registryCancelRequests)
		}
		init()
	}, [parseOrders, setOrders, setCancels, account]) 


	return [orders]

}
