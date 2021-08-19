import { useCallback, useEffect, useState } from 'react'
import { ChainId } from '@pancakeswap-libs/sdk'
import { useActiveWeb3React } from 'hooks'
import { utils } from 'ethers'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import gql from 'graphql-tag'

import { ROUTER_ADDRESS } from '../constants'
import { MIDROUTER_CONTRACT_ADDRESS } from '../constants/autonomy'
import { useRegistryContract } from './useContract'


type UrlMap = { [chainId: number]: string }
const autonomyGraphServers: UrlMap = {
    [ChainId.MAINNET]: 'https://api.studio.thegraph.com/query/2719/autonomy-subgraph-bsc-mainnet-2/v.0.0.1',
    [ChainId.BSCTESTNET]: 'https://api.studio.thegraph.com/query/2719/autonomy-subgraph-bsc-testnet/v.0.0.1',
}

export const autonomyHistory = (chainId: number | undefined) => new ApolloClient({
    link: createHttpLink({
        uri: autonomyGraphServers[chainId || ChainId.MAINNET],
    }),
    cache: new InMemoryCache(),
})

const TRANSACTION_HISTORY = gql`
    query newRequests($account: String, $contract: String) {
        newRequests(where: { requester: $account, target: $contract}) {
            id
            timeStamp
            requester
            target
            referer
            callData
            initEthSent
            ethForCall
            verifySender
            payWithAuto
        }
    }
`
const CANCELLATION_HISTORY = gql`
    query cancelledRequests($account: String, $contract: String) {
        cancelledRequests(where: { requester: $account, target: $contract}) {
            id
            timeStamp
            requester
            target
            wasExecuted
        }
    }
`

export default function useTransactionHistory() {

  const [transactions, setTransactions] = useState<any>([{}]);
  const [orders, setOrders] = useState<Array<any>>([]);
  const [cancels, setCancels] = useState<Array<any>>([]);

	const { account, chainId } = useActiveWeb3React()
	const registryContract = useRegistryContract()

	const canExecute = useCallback(async (id: any) => {
		return registryContract!.getHashedReq(id)  
	}, [registryContract])

	const canCancel = useCallback((orderId: any) => {
		const cancelArr: any = []
		const executedArr: any = []
		cancels.forEach((cancel: any ) => {
			if(!cancel.wasExecuted){
				cancelArr.push(cancel.id)
			} else {
				executedArr.push(cancel.id)
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
	// Gets all the promises to return
	const getHashed = useCallback(async () => {
		return Promise.all(orders.map(request => canExecute(request.id)))
	}, [canExecute, orders])

	const getTransactionHistory = useCallback(async (acct: string | null | undefined) => {
		if (!acct) return []
	
		const graphServer = autonomyHistory(chainId)
		const result = await graphServer.query({
			query: TRANSACTION_HISTORY,
			variables: {
				account: acct,
				contract: MIDROUTER_CONTRACT_ADDRESS[chainId || ChainId.MAINNET]
			},
			fetchPolicy: 'no-cache',
		})
		return result.data.newRequests
	}, [chainId])

	const getCancellationHistory = useCallback(async (acct: string | null | undefined) => {
		if (!acct) return []
	
		const graphServer = autonomyHistory(chainId)
		const result = await graphServer.query({
			query: CANCELLATION_HISTORY,
			variables: {
				account: acct,
				contract: MIDROUTER_CONTRACT_ADDRESS[chainId || ChainId.MAINNET]
			},
			fetchPolicy: 'no-cache',
		})
	
		return result.data.cancelledRequests;
	}, [chainId])
	
	// Returns a copy of orders but it adds the hashed parameter 
	const aggregateHash = useCallback(async () => {	
		return JSON.parse(JSON.stringify(orders)).map((order: any) => {
			// order.status = canCancel(values[index], order.id)
			return order
		});
	}, [orders]);
	
	const parseOrders = useCallback((allOrders: any[]) => {
		return allOrders.map((order: any) => ({
			method: methodSelector(order.callData),
			callData: order.callData,
			time: timeConverter(order.timeStamp),
			id: order.id,
			inputToken: findInputToken(order.callData),
			outputToken: findOutPutToken(order.callData),
			inputAmount: findInputAmount(order.callData, order.ethForCall),
			outputAmount: findOutputAmount(order.callData),
			requester: order.requester,
			target: order.target,
			referer: order.referer,
			initEthSent: order.initEthSent,
			ethForCall: order.ethForCall,
			verifySender: order.verifySender,
			payWithAuto: order.payWithAuto,
			typeof: typeSelector(order.callData),
			status: canCancel(order.id)
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
	
	function timeConverter(UNIX_timestamp: any) {
		const a = new Date(UNIX_timestamp * 1000);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		const year = a.getFullYear();
		const month = months[a.getMonth()];
		const date = a.getDate();
		const hour = a.getHours();
		const min = a.getMinutes();
		const sec = a.getSeconds();
		const time = `${date} ${month} ${year} ${hour}:${min}:${sec}`;
		return time
	}

	useEffect(() => {
		async function init() {
			const [orders2, cancellations] = await Promise.all([getTransactionHistory(account),  await getCancellationHistory(account)]);
			setCancels(cancellations)
			setOrders(parseOrders(orders2))
		}
		init()
	}, [account, setOrders, getTransactionHistory, getCancellationHistory, parseOrders]) 

	useEffect(() => {
    const interval = setInterval(async () => {
			const [orders2, cancellations] = await Promise.all([getTransactionHistory(account),  await getCancellationHistory(account)]);
			setCancels(cancellations)
			setOrders(parseOrders(orders2))
    }, 100)

    return () => clearInterval(interval)
	}, [account, setOrders, getTransactionHistory, getCancellationHistory, parseOrders])

  // Two hooks that fetch data on if the request is already executed or not,
	// Separate from usePastOrders because its async
	useEffect(() => {
		async function init() {
			const data = await aggregateHash()
			setTransactions(data)	
		}
		init()
	}, [orders, setTransactions, aggregateHash]) 

	useEffect(() => {
		const interval = setInterval(async () => {
			const data = await aggregateHash()
			setTransactions(data)
		}, 10000)

		return () => clearInterval(interval)
	}, [orders, setTransactions, aggregateHash])

  return [transactions, orders]
}