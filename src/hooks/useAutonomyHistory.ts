import Moralis from 'moralis'

import { useCallback, useEffect, useState } from 'react'
import { utils } from 'ethers'
import { useActiveWeb3React } from 'hooks'
import { ROUTER_ADDRESS } from '../constants'

Moralis.initialize('0InOR7cWvu3rRwDZRHTDdDZ26Vj7Jc7HOBiYiGWa')
Moralis.serverURL = 'https://mz4k8ltjvwtm.usemoralis.com:2053/server'

export default function useTransactionHistory() {
  const [orders, setOrders] = useState<Array<any>>([])
  const [cancels, setCancels] = useState<Array<any>>([])
  const [executes, setExecuted] = useState<Array<any>>([])
  const { account } = useActiveWeb3React()

  const canCancel = useCallback(
    (orderId: any) => {
      const cancelArr = cancels.map((cancel: any) => cancel.get('uid'))
      if (cancelArr.includes(orderId)) {
        return true
      }
      return false
    },
    [cancels]
  )

  const wasExecuted = useCallback(
    (orderId: any) => {
      const executedArr = executes.map((execute: any) => execute.get('uid'))
      // executes.forEach((executed: any ) => {
      // 	if (executed.get('wasRemoved')) {
      // 		executedArr.push(executed.get('uid'))
      // 	}
      // });
      // console.log('executedArr',executedArr)
      if (executedArr.includes(orderId)) {
        return true
      }
      return false
    },
    [executes]
  )

  function methodSelector(orderData: any) {
    const sliced = orderData.slice(0, 10)
    if (sliced === '0x873cf9f3' || sliced === '0x673f7821') return 'Limit -> BNB for Tokens'
    if (sliced === '0x0bee688d' || sliced === '0x9c9abb71') return 'Limit -> Tokens for BNB'
    if (sliced === '0x6dbbd34b' || sliced === '0xa111d966') return 'Limit -> Tokens for Tokens'
    if (sliced === '0x259c2463') return 'Stop -> BNB for Tokens'
    if (sliced === '0x04d76c43') return 'Stop -> Tokens for BNB'
    if (sliced === '0x2fa1b93a') return 'Stop -> Tokens for Tokens'
    return 'Undefined Method'
  }

  function typeSelector(orderData: any) {
    const sliced = orderData.slice(0, 10)
    if (sliced === '0x873cf9f3' || sliced === '0x673f7821') return 'Limit'
    if (sliced === '0x0bee688d' || sliced === '0x9c9abb71') return 'Limit'
    if (sliced === '0x6dbbd34b' || sliced === '0xa111d966') return 'Limit'
    if (sliced === '0x259c2463') return 'Stop'
    if (sliced === '0x04d76c43') return 'Stop'
    if (sliced === '0x2fa1b93a') return 'Stop'
    return 'Undefined'
  }

  function findOutputAmount(callData: any) {
    const sliced = callData.slice(0, 10)
    const actualData = `0x${callData.slice(10, callData.length + 1)}`
    let decoded: any
    console.log(decoded[4], 'decoded')
    let ret = ''
    // Limits
    // BNB for Tokens
    if (sliced === '0x873cf9f3') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', ' uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
      // BNB for Tokens prepay
    } else if (sliced === '0x673f7821') {
      decoded = utils.defaultAbiCoder.decode(
        ['uint256', 'address', 'uint256', 'address[]', ' address', 'uint256'],
        actualData
      )
      ret = decoded[2].toString()
      // Tokens for BNB
    } else if (sliced === '0x0bee688d') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[5].toString()
      // Tokens for BNB prepay
    } else if (sliced === '0x9c9abb71') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
      // Tokens for Tokens
    } else if (sliced === '0x6dbbd34b') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[5].toString()
      // Tokens for Tokens prepay
    } else if (sliced === '0xa111d966') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
    }
    // Stops
    // Tokens for Tokens
    else if (sliced === '0x2fa1b93a') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6].toString()
      // BNB for Tokens
    } else if (sliced === '0x259c2463') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[5].toString()
      // Tokens for BNB
    } else if (sliced === '0x04d76c43') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6].toString()
    }
    return ret
  }
  // Limits
  function findInputAmount(callData: any, ethForCall: any) {
    const sliced = callData.slice(0, 10)
    const actualData = `0x${callData.slice(10, callData.length + 1)}`
    let decoded: any
    let ret = ''
    if (sliced === '0x873cf9f3') {
      ret = ethForCall
      // BNB for Tokens prepay
    } else if (sliced === '0x673f7821') {
      decoded = utils.defaultAbiCoder.decode(
        ['uint256', 'address', 'uint256', 'address[]', ' address', 'uint256'],
        actualData
      )
      ret = ethForCall
      // Tokens for BNB
    } else if (sliced === '0x0bee688d') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
      // Tokens for BNB prepay
    } else if (sliced === '0x9c9abb71') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[3].toString()
      // Tokens for Tokens
    } else if (sliced === '0x6dbbd34b') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
      // Tokens for Tokens prepay
    } else if (sliced === '0xa111d966') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[3].toString()
    }
    // STOP LOSS TOKEN TO TOKEN
    // TODO
    else if (sliced === '0x2fa1b93a') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
    } else if (sliced === '0x259c2463') {
      ret = ethForCall
    } else if (sliced === '0x04d76c43') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[4].toString()
    }
    return ret
  }

  function findOutPutToken(callData: any) {
    const sliced = callData.slice(0, 10)
    const actualData = `0x${callData.slice(10, callData.length + 1)}`
    let decoded: any
    let ret = ''
    if (sliced === '0x873cf9f3') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', ' uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[5][decoded[5].length - 1]
    } else if (sliced === '0x673f7821') {
      decoded = utils.defaultAbiCoder.decode(
        ['uint256', 'address', 'uint256', 'address[]', ' address', 'uint256'],
        actualData
      )
      ret = decoded[3][decoded[3].length - 1]
    } else if (sliced === '0x0bee688d') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][decoded[6].length - 1]
    } else if (sliced === '0x9c9abb71') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[5][decoded[5].length - 1]
    } else if (sliced === '0x6dbbd34b') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][decoded[6].length - 1]
    } else if (sliced === '0xa111d966') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[5][decoded[5].length - 1]
    } else if (sliced === '0x2fa1b93a') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[7][decoded[7].length - 1]
    } else if (sliced === '0x259c2463') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][decoded[6].length - 1]
    } else if (sliced === '0x04d76c43') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[7][decoded[7].length - 1]
    }
    return ret
  }

  function findInputToken(callData: any) {
    const sliced = callData.slice(0, 10)
    const actualData = `0x${callData.slice(10, callData.length + 1)}`
    let decoded: any
    let ret = ''
    if (sliced === '0x873cf9f3') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', ' uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[5][0]
    } else if (sliced === '0x673f7821') {
      decoded = utils.defaultAbiCoder.decode(
        ['uint256', 'address', 'uint256', 'address[]', ' address', 'uint256'],
        actualData
      )
      ret = decoded[3][0]
    } else if (sliced === '0x0bee688d') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][0]
    } else if (sliced === '0x9c9abb71') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[5][0]
    } else if (sliced === '0x6dbbd34b') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][0]
    } else if (sliced === '0xa111d966') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'address', 'uint256'],
        actualData
      )
      ret = decoded[5][0]
    } else if (sliced === '0x2fa1b93a') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[7][0]
    } else if (sliced === '0x259c2463') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[6][0]
    } else if (sliced === '0x04d76c43') {
      decoded = utils.defaultAbiCoder.decode(
        ['address', 'uint256', 'uint256', 'address', 'uint256', 'uint256', 'uint256', 'address[]', 'uint256'],
        actualData
      )
      ret = decoded[7][0]
    }
    return ret
  }

  const parseOrders = useCallback(
    (allOrders: any[]) => {
      return allOrders
        .map((order: any) => ({
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
          status: canCancel(order.get('uid')) ? 'cancelled' : wasExecuted(order.get('uid')) ? 'executed' : 'open',
          // execution: wasExecuted(order.get('uid'))
        }))
        .filter((order: any) => order.callData.includes(ROUTER_ADDRESS.toLowerCase().substr(2)))
        .sort((first: any, second: any) => {
          if (parseInt(first.id) < parseInt(second.id)) {
            return 1
          }
          if (parseInt(first.id) > parseInt(second.id)) {
            return -1
          }
          return 0
        })
    },
    [canCancel, wasExecuted]
  )

  useEffect(() => {
    async function init() {
      const queryRequests = new Moralis.Query('RegistryRequests')
      const queryCancels = new Moralis.Query('RegistryCancelRequests')
      const queryExecutes = new Moralis.Query('RegistryExecutedRequests')
      queryRequests.equalTo('user', account?.toLocaleLowerCase())
      queryRequests.limit(10000)
      queryCancels.limit(10000)
      queryExecutes.limit(10000)
      const registryRequests = await queryRequests.find()
      const registryCancelRequests = await queryCancels.find()
      const registryExecutedRequests = await queryExecutes.find()
      setOrders(registryRequests)
      setCancels(registryCancelRequests)
      setExecuted(registryExecutedRequests)
    }

    const interval = setInterval(init, 2000)
    return () => clearInterval(interval)
  }, [setOrders, setCancels, account])

  return [parseOrders(orders)]
}
