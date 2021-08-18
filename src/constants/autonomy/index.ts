import { ChainId } from '@pancakeswap-libs/sdk'

type AddressMap = { [chainId: number]: string }

/**
 * Autonomy Registry Contract
 * !! Only for BSC Mainnet/Testnet
 */
export const REGISTRY_CONTRACT_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xF2f9793f55c9DAA0b9ba784BC558D90e2035ba86',
  [ChainId.BSCTESTNET]: '0x0a92B53e97D5da0ba8253c9015fFef0F9D9cd750',
}

 /**
  * Mid Router Contract (Uniswap V2)
  * !! Only for BSC Mainnet/Testnet
  */
export const MIDROUTER_CONTRACT_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x28183542e7B3467d83740c7B0D8D087D62F6598e',
  [ChainId.BSCTESTNET]: '0x57c11ED54e9980E2b02cd6C08fB317d8fF47CA4e',
}
 
export const REGISTRY_CONTRACT_ABI = [
  {
    "inputs":[
      {
        "internalType":"contract IERC20",
        "name":"AUTO",
        "type":"address"
      },
      {
        "internalType":"contract IStakeManager",
        "name":"staker",
        "type":"address"
      },
      {
        "internalType":"contract IOracle",
        "name":"oracle",
        "type":"address"
      },
      {
        "internalType":"contract IForwarder",
        "name":"userForwarder",
        "type":"address"
      },
      {
        "internalType":"contract IForwarder",
        "name":"gasForwarder",
        "type":"address"
      },
      {
        "internalType":"contract IForwarder",
        "name":"userGasForwarder",
        "type":"address"
      }
    ],
    "stateMutability":"nonpayable",
    "type":"constructor",
    "name":"constructor"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "indexed":false,
        "internalType":"address payable",
        "name":"user",
        "type":"address"
      },
      {
        "indexed":false,
        "internalType":"address",
        "name":"target",
        "type":"address"
      },
      {
        "indexed":false,
        "internalType":"address payable",
        "name":"referer",
        "type":"address"
      },
      {
        "indexed":false,
        "internalType":"bytes",
        "name":"callData",
        "type":"bytes"
      },
      {
        "indexed":false,
        "internalType":"uint112",
        "name":"initEthSent",
        "type":"uint112"
      },
      {
        "indexed":false,
        "internalType":"uint112",
        "name":"ethForCall",
        "type":"uint112"
      },
      {
        "indexed":false,
        "internalType":"bool",
        "name":"verifyUser",
        "type":"bool"
      },
      {
        "indexed":false,
        "internalType":"bool",
        "name":"insertFeeAmount",
        "type":"bool"
      },
      {
        "indexed":false,
        "internalType":"bool",
        "name":"payWithAUTO",
        "type":"bool"
      }
    ],
    "name":"HashedReqAdded",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "indexed":false,
        "internalType":"bool",
        "name":"wasExecuted",
        "type":"bool"
      }
    ],
    "name":"HashedReqRemoved",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      }
    ],
    "name":"HashedReqUnveriAdded",
    "type":"event"
  },
  {
    "anonymous":false,
    "inputs":[
      {
        "indexed":true,
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "indexed":false,
        "internalType":"bool",
        "name":"wasExecuted",
        "type":"bool"
      }
    ],
    "name":"HashedReqUnveriRemoved",
    "type":"event"
  },
  {
    "inputs":[
      
    ],
    "name":"BASE_BPS",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"GAS_OVERHEAD_AUTO",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"GAS_OVERHEAD_ETH",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"PAY_AUTO_BPS",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"PAY_ETH_BPS",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      }
    ],
    "name":"cancelHashedReq",
    "outputs":[
      
    ],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      },
      {
        "internalType":"bytes",
        "name":"dataPrefix",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataSuffix",
        "type":"bytes"
      }
    ],
    "name":"cancelHashedReqUnveri",
    "outputs":[
      
    ],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      },
      {
        "internalType":"uint256",
        "name":"expectedGas",
        "type":"uint256"
      }
    ],
    "name":"executeHashedReq",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"gasUsed",
        "type":"uint256"
      }
    ],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      },
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      },
      {
        "internalType":"bytes",
        "name":"dataPrefix",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataSuffix",
        "type":"bytes"
      },
      {
        "internalType":"uint256",
        "name":"expectedGas",
        "type":"uint256"
      }
    ],
    "name":"executeHashedReqUnveri",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"gasUsed",
        "type":"uint256"
      }
    ],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getAUTO",
    "outputs":[
      {
        "internalType":"contract IERC20",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"address",
        "name":"addr",
        "type":"address"
      }
    ],
    "name":"getExecCountOf",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getGasForwarder",
    "outputs":[
      {
        "internalType":"address",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"bytes",
        "name":"r",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataPrefix",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataPostfix",
        "type":"bytes"
      }
    ],
    "name":"getHashedIpfsReq",
    "outputs":[
      {
        "internalType":"bytes32",
        "name":"",
        "type":"bytes32"
      }
    ],
    "stateMutability":"pure",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      }
    ],
    "name":"getHashedReq",
    "outputs":[
      {
        "internalType":"bytes32",
        "name":"",
        "type":"bytes32"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      }
    ],
    "name":"getHashedReqUnveri",
    "outputs":[
      {
        "internalType":"bytes32",
        "name":"",
        "type":"bytes32"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getHashedReqs",
    "outputs":[
      {
        "internalType":"bytes32[]",
        "name":"",
        "type":"bytes32[]"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getHashedReqsLen",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"startIdx",
        "type":"uint256"
      },
      {
        "internalType":"uint256",
        "name":"endIdx",
        "type":"uint256"
      }
    ],
    "name":"getHashedReqsSlice",
    "outputs":[
      {
        "internalType":"bytes32[]",
        "name":"",
        "type":"bytes32[]"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getHashedReqsUnveri",
    "outputs":[
      {
        "internalType":"bytes32[]",
        "name":"",
        "type":"bytes32[]"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getHashedReqsUnveriLen",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"uint256",
        "name":"startIdx",
        "type":"uint256"
      },
      {
        "internalType":"uint256",
        "name":"endIdx",
        "type":"uint256"
      }
    ],
    "name":"getHashedReqsUnveriSlice",
    "outputs":[
      {
        "internalType":"bytes32[]",
        "name":"",
        "type":"bytes32[]"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"bytes",
        "name":"r",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataPrefix",
        "type":"bytes"
      },
      {
        "internalType":"bytes",
        "name":"dataPostfix",
        "type":"bytes"
      }
    ],
    "name":"getIpfsReqBytes",
    "outputs":[
      {
        "internalType":"bytes",
        "name":"",
        "type":"bytes"
      }
    ],
    "stateMutability":"pure",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getOracle",
    "outputs":[
      {
        "internalType":"address",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"address",
        "name":"addr",
        "type":"address"
      }
    ],
    "name":"getReferalCountOf",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      }
    ],
    "name":"getReqBytes",
    "outputs":[
      {
        "internalType":"bytes",
        "name":"",
        "type":"bytes"
      }
    ],
    "stateMutability":"pure",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"address",
        "name":"addr",
        "type":"address"
      }
    ],
    "name":"getReqCountOf",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"",
        "type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"bytes",
        "name":"rBytes",
        "type":"bytes"
      }
    ],
    "name":"getReqFromBytes",
    "outputs":[
      {
        "components":[
          {
            "internalType":"address payable",
            "name":"user",
            "type":"address"
          },
          {
            "internalType":"address",
            "name":"target",
            "type":"address"
          },
          {
            "internalType":"address payable",
            "name":"referer",
            "type":"address"
          },
          {
            "internalType":"bytes",
            "name":"callData",
            "type":"bytes"
          },
          {
            "internalType":"uint112",
            "name":"initEthSent",
            "type":"uint112"
          },
          {
            "internalType":"uint112",
            "name":"ethForCall",
            "type":"uint112"
          },
          {
            "internalType":"bool",
            "name":"verifyUser",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"insertFeeAmount",
            "type":"bool"
          },
          {
            "internalType":"bool",
            "name":"payWithAUTO",
            "type":"bool"
          }
        ],
        "internalType":"struct IRegistry.Request",
        "name":"r",
        "type":"tuple"
      }
    ],
    "stateMutability":"pure",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getStakeManager",
    "outputs":[
      {
        "internalType":"address",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getUserForwarder",
    "outputs":[
      {
        "internalType":"address",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      
    ],
    "name":"getUserGasForwarder",
    "outputs":[
      {
        "internalType":"address",
        "name":"",
        "type":"address"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"bytes",
        "name":"callData",
        "type":"bytes"
      },
      {
        "internalType":"uint256",
        "name":"expectedGas",
        "type":"uint256"
      },
      {
        "internalType":"uint256",
        "name":"startIdx",
        "type":"uint256"
      }
    ],
    "name":"insertToCallData",
    "outputs":[
      {
        "internalType":"bytes",
        "name":"",
        "type":"bytes"
      }
    ],
    "stateMutability":"pure",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"bytes32",
        "name":"hashedIpfsReq",
        "type":"bytes32"
      }
    ],
    "name":"newHashedReqUnveri",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      }
    ],
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "inputs":[
      {
        "internalType":"address",
        "name":"target",
        "type":"address"
      },
      {
        "internalType":"address payable",
        "name":"referer",
        "type":"address"
      },
      {
        "internalType":"bytes",
        "name":"callData",
        "type":"bytes"
      },
      {
        "internalType":"uint112",
        "name":"ethForCall",
        "type":"uint112"
      },
      {
        "internalType":"bool",
        "name":"verifyUser",
        "type":"bool"
      },
      {
        "internalType":"bool",
        "name":"insertFeeAmount",
        "type":"bool"
      },
      {
        "internalType":"bool",
        "name":"payWithAUTO",
        "type":"bool"
      }
    ],
    "name":"newReq",
    "outputs":[
      {
        "internalType":"uint256",
        "name":"id",
        "type":"uint256"
      }
    ],
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "stateMutability":"payable",
    "type":"receive"
  }
]
 
export const MIDROUTER_CONTRACT_ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "autonomyVF_",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor",
    "name": "constructor"
  },
  {
    "inputs": [],
    "name": "autonomyVF",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "ethToTokenLimitOrder",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMax",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "ethToTokenStopLoss",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "inputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "tokenToEthLimitOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "inputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMax",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "tokenToEthStopLoss",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "inputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "tokenToTokenLimitOrder",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "contract IUniswapV2Router02",
        "name": "uni",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "inputAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOutMax",
        "type": "uint256"
      },
      {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
      }
    ],
    "name": "tokenToTokenStopLoss",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
 