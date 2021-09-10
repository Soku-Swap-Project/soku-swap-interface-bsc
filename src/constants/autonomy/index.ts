import { ChainId } from '@pancakeswap-libs/sdk-v2'

type AddressMap = { [chainId: number]: string }

/**
 * Autonomy Registry Contract
 * !! Only for BSC Mainnet/Testnet
 */
export const REGISTRY_CONTRACT_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xfA10ebE826a3074fDD105a83F510Ba618EBd80e1',
  [ChainId.BSCTESTNET]: '0x0a92B53e97D5da0ba8253c9015fFef0F9D9cd750',
}

 /**
  * Mid Router Contract (Uniswap V2)
  * !! Only for BSC Mainnet/Testnet
  */
export const MIDROUTER_CONTRACT_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x8E43C20ff7E019Ee560a04d5a80CBDDf9f70EB7D',
  [ChainId.BSCTESTNET]: '0x57c11ED54e9980E2b02cd6C08fB317d8fF47CA4e',
}
 
export const REGISTRY_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'contract IERC20',
        name: 'AUTO',
        type: 'address',
      },
      {
        internalType: 'contract IStakeManager',
        name: 'staker',
        type: 'address',
      },
      {
        internalType: 'contract IOracle',
        name: 'oracle',
        type: 'address',
      },
      {
        internalType: 'contract IForwarder',
        name: 'userForwarder',
        type: 'address',
      },
      {
        internalType: 'contract IForwarder',
        name: 'gasForwarder',
        type: 'address',
      },
      {
        internalType: 'contract IForwarder',
        name: 'userGasForwarder',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
    name: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address payable',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address payable',
        name: 'referer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'callData',
        type: 'bytes',
      },
      {
        indexed: false,
        internalType: 'uint112',
        name: 'initEthSent',
        type: 'uint112',
      },
      {
        indexed: false,
        internalType: 'uint112',
        name: 'ethForCall',
        type: 'uint112',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'verifyUser',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'insertFeeAmount',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'payWithAUTO',
        type: 'bool',
      },
    ],
    name: 'HashedReqAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'wasExecuted',
        type: 'bool',
      },
    ],
    name: 'HashedReqRemoved',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'HashedReqUnveriAdded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'wasExecuted',
        type: 'bool',
      },
    ],
    name: 'HashedReqUnveriRemoved',
    type: 'event',
  },
  {
    inputs: [],
    name: 'BASE_BPS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GAS_OVERHEAD_AUTO',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'GAS_OVERHEAD_ETH',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PAY_AUTO_BPS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'PAY_ETH_BPS',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
    ],
    name: 'cancelHashedReq',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'dataPrefix',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataSuffix',
        type: 'bytes',
      },
    ],
    name: 'cancelHashedReqUnveri',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'expectedGas',
        type: 'uint256',
      },
    ],
    name: 'executeHashedReq',
    outputs: [
      {
        internalType: 'uint256',
        name: 'gasUsed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
      {
        internalType: 'bytes',
        name: 'dataPrefix',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataSuffix',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'expectedGas',
        type: 'uint256',
      },
    ],
    name: 'executeHashedReqUnveri',
    outputs: [
      {
        internalType: 'uint256',
        name: 'gasUsed',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAUTO',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getExecCountOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getGasForwarder',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'r',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataPrefix',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataPostfix',
        type: 'bytes',
      },
    ],
    name: 'getHashedIpfsReq',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getHashedReq',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getHashedReqUnveri',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHashedReqs',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHashedReqsLen',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'startIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endIdx',
        type: 'uint256',
      },
    ],
    name: 'getHashedReqsSlice',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHashedReqsUnveri',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getHashedReqsUnveriLen',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'startIdx',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endIdx',
        type: 'uint256',
      },
    ],
    name: 'getHashedReqsUnveriSlice',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'r',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataPrefix',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: 'dataPostfix',
        type: 'bytes',
      },
    ],
    name: 'getIpfsReqBytes',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getOracle',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getReferalCountOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
    ],
    name: 'getReqBytes',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getReqCountOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'rBytes',
        type: 'bytes',
      },
    ],
    name: 'getReqFromBytes',
    outputs: [
      {
        components: [
          {
            internalType: 'address payable',
            name: 'user',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'target',
            type: 'address',
          },
          {
            internalType: 'address payable',
            name: 'referer',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint112',
            name: 'initEthSent',
            type: 'uint112',
          },
          {
            internalType: 'uint112',
            name: 'ethForCall',
            type: 'uint112',
          },
          {
            internalType: 'bool',
            name: 'verifyUser',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'insertFeeAmount',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'payWithAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct IRegistry.Request',
        name: 'r',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getStakeManager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUserForwarder',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUserGasForwarder',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'callData',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'expectedGas',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startIdx',
        type: 'uint256',
      },
    ],
    name: 'insertToCallData',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'hashedIpfsReq',
        type: 'bytes32',
      },
    ],
    name: 'newHashedReqUnveri',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'target',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: 'referer',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'callData',
        type: 'bytes',
      },
      {
        internalType: 'uint112',
        name: 'ethForCall',
        type: 'uint112',
      },
      {
        internalType: 'bool',
        name: 'verifyUser',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'insertFeeAmount',
        type: 'bool',
      },
      {
        internalType: 'bool',
        name: 'payWithAUTO',
        type: 'bool',
      },
    ],
    name: 'newReq',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

export const MIDROUTER_CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'registry_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'userVeriForwarder_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'userFeeVeriForwarder_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'WETH_',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'defaultFeeInfo',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
    name: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'WETH',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenLimitOrder',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenLimitOrderPayDefault',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenLimitOrderPaySpecific',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenStopLoss',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenStopLossPayDefault',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'ethToTokenStopLossPaySpecific',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getDefaultFeeInfo',
    outputs: [
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registry',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'newDefaultFee',
        type: 'tuple',
      },
    ],
    name: 'setDefaultFeeInfo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthLimitOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthLimitOrderPayDefault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthLimitOrderPaySpecific',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthStopLoss',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthStopLossPayDefault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToEthStopLossPaySpecific',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenLimitOrder',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenLimitOrderPayDefault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenLimitOrderPaySpecific',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenStopLoss',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenStopLossPayDefault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'feeAmount',
        type: 'uint256',
      },
      {
        internalType: 'contract IUniswapV2Router02',
        name: 'uni',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'contract IUniswapV2Router02',
            name: 'uni',
            type: 'address',
          },
          {
            internalType: 'address[]',
            name: 'path',
            type: 'address[]',
          },
          {
            internalType: 'bool',
            name: 'isAUTO',
            type: 'bool',
          },
        ],
        internalType: 'struct UniV2LimitsStops.FeeInfo',
        name: 'feeInfo',
        type: 'tuple',
      },
      {
        internalType: 'uint256',
        name: 'inputAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMin',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amountOutMax',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'path',
        type: 'address[]',
      },
      {
        internalType: 'uint256',
        name: 'deadline',
        type: 'uint256',
      },
    ],
    name: 'tokenToTokenStopLossPaySpecific',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'userFeeVeriForwarder',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'userVeriForwarder',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
]

 