/* eslint-disable */
// import { useLingui } from '@lingui/react'
import Modal from '@material-ui/core/Modal'
import { AnyAction } from '@reduxjs/toolkit'
import { useWeb3React } from '@web3-react/core'
// import Image from "next/image";
import React, { FC, useEffect, useState } from 'react'
import { NETWORK_ICON, NETWORK_LABEL, SupportedChainId } from '../../config/networks'

export const SUPPORTED_NETWORKS: Record<
  number,
  {
    chainId: string
    chainName: string
    rubicName?: string
    nativeCurrency: {
      name: string
      symbol: string
      decimals: number
    }
    rpcUrls: string[]
    blockExplorerUrls: string[]
  }
> = {
  [SupportedChainId.ETHEREUM]: {
    chainId: '0x1',
    chainName: 'Ethereum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://mainnet.infura.io/v3'],
    blockExplorerUrls: ['https://etherscan.com'],
  },
  [SupportedChainId.ROPSTEN]: {
    chainId: '0x3',
    chainName: 'Ropsten',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://ropsten.infura.io/v3'],
    blockExplorerUrls: ['https://ropsten.etherscan.com'],
  },
  [SupportedChainId.RINKEBY]: {
    chainId: '0x4',
    chainName: 'Rinkeby',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://rinkeby.infura.io/v3'],
    blockExplorerUrls: ['https://rinkeby.etherscan.com'],
  },
  [SupportedChainId.KOVAN]: {
    chainId: '0x2A',
    chainName: 'Kovan',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://kovan.infura.io/v3'],
    blockExplorerUrls: ['https://kovan.etherscan.com'],
  },
  [SupportedChainId.FANTOM]: {
    chainId: '0xfa',
    chainName: 'Fantom',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    rpcUrls: ['https://rpcapi.fantom.network'],
    blockExplorerUrls: ['https://ftmscan.com'],
  },
  [SupportedChainId.BSC]: {
    chainId: '0x38',
    chainName: 'Binance Smart Chain',
    nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org'],
    blockExplorerUrls: ['https://bscscan.com'],
  },
  [SupportedChainId.POLYGON]: {
    chainId: '0x89',
    chainName: 'Matic',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    rpcUrls: ['https://polygon-rpc.com'], // ['https://matic-mainnet.chainstacklabs.com/'],
    blockExplorerUrls: ['https://polygonscan.com'],
  },
  // [ChainId.HECO]: {
  //   chainId: '0x80',
  //   chainName: 'Heco',
  //   nativeCurrency: {
  //     name: 'Heco Token',
  //     symbol: 'HT',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://http-mainnet.hecochain.com'],
  //   blockExplorerUrls: ['https://hecoinfo.com'],
  // },
  // [ChainId.XDAI]: {
  //   chainId: '0x64',
  //   chainName: 'xDai',
  //   nativeCurrency: {
  //     name: 'xDai Token',
  //     symbol: 'xDai',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://rpc.gnosischain.com'],
  //   blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
  // },
  [SupportedChainId.HARMONY]: {
    chainId: '0x63564C40',
    chainName: 'Harmony',
    nativeCurrency: {
      name: 'One Token',
      symbol: 'ONE',
      decimals: 18,
    },
    rpcUrls: [
      'https://api.harmony.one',
      'https://s1.api.harmony.one',
      'https://s2.api.harmony.one',
      'https://s3.api.harmony.one',
    ],
    blockExplorerUrls: ['https://explorer.harmony.one/'],
  },
  [SupportedChainId.AVALANCHE]: {
    chainId: '0xA86A',
    chainName: 'Avalanche Mainnet C-Chain',
    nativeCurrency: {
      name: 'Avalanche Token',
      symbol: 'AVAX',
      decimals: 18,
    },
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    blockExplorerUrls: ['https://snowtrace.io'],
  },
  // [ChainId.OKEX]: {
  //   chainId: '0x42',
  //   chainName: 'OKEx',
  //   nativeCurrency: {
  //     name: 'OKEx Token',
  //     symbol: 'OKT',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://exchainrpc.okex.org'],
  //   blockExplorerUrls: ['https://www.oklink.com/okexchain'],
  // },
  [SupportedChainId.ARBITRUM]: {
    chainId: '0xA4B1',
    chainName: 'Arbitrum',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
  },
  // [ChainId.CELO]: {
  //   chainId: '0xA4EC',
  //   chainName: 'Celo',
  //   nativeCurrency: {
  //     name: 'Celo',
  //     symbol: 'CELO',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://forno.celo.org'],
  //   blockExplorerUrls: ['https://explorer.celo.org'],
  // },
  [SupportedChainId.MOONRIVER]: {
    chainId: '0x505',
    chainName: 'Moonriver',
    nativeCurrency: {
      name: 'Moonriver',
      symbol: 'MOVR',
      decimals: 18,
    },
    rpcUrls: ['https://rpc.moonriver.moonbeam.network'],
    blockExplorerUrls: ['https://moonriver.moonscan.io'],
  },
  // [ChainId.FUSE]: {
  //   chainId: '0x7A',
  //   chainName: 'Fuse',
  //   nativeCurrency: {
  //     name: 'Fuse',
  //     symbol: 'FUSE',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://rpc.fuse.io'],
  //   blockExplorerUrls: ['https://explorer.fuse.io'],
  // },
  // [ChainId.TELOS]: {
  //   chainId: '0x28',
  //   chainName: 'Telos',
  //   nativeCurrency: {
  //     name: 'Telos',
  //     symbol: 'TLOS',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://mainnet.telos.net/evm'],
  //   blockExplorerUrls: ['https://rpc1.us.telos.net/v2/explore'],
  // },
  // [ChainId.PALM]: {
  //   chainId: '0x2A15C308D',
  //   chainName: 'Palm',
  //   nativeCurrency: {
  //     name: 'Palm',
  //     symbol: 'PALM',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://palm-mainnet.infura.io/v3/da5fbfafcca14b109e2665290681e267'],
  //   blockExplorerUrls: ['https://explorer.palm.io'],
  // },
  // [ChainId.MOONBEAM]: {
  //   chainId: '0x504',
  //   chainName: 'Moonbeam',
  //   nativeCurrency: {
  //     name: 'Glimmer',
  //     symbol: 'GLMR',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://rpc.api.moonbeam.network'],
  //   blockExplorerUrls: ['https://moonbeam.moonscan.io'],
  // },
  // // [ChainId.OPTIMISM]: {
  // //   chainId: '0xA',
  // //   chainName: 'Optimism',
  // //   nativeCurrency: {
  // //     name: 'Ether',
  // //     symbol: 'ETH',
  // //     decimals: 18,
  // //   },
  // //   rpcUrls: ['https://mainnet.optimism.io'],
  // //   blockExplorerUrls: ['https://optimistic.etherscan.io'],
  // // },
  // [SupportedChainId.AURORA]: {
  //   // chainId: '0xA', incorrect
  //   chainName: 'Aurora',
  //   nativeCurrency: {
  //     name: 'Ether',
  //     symbol: 'ETH',
  //     decimals: 18,
  //   },
  //   rpcUrls: ['https://mainnet.aurora.dev'],
  //   blockExplorerUrls: ['https://aurorascan.dev/'],
  // },
}

interface Props {
  // chainId: number;
  // account: string;
  toggleNetworkModal: any
  isModalOpen: boolean
}

const TempModal = Modal as any

const SwitchNetworkModal: FC<Props> = ({ toggleNetworkModal, isModalOpen }) => {
  const { ethereum } = window
  const { account, chainId, library } = useWeb3React()
  const supportedChains = [56, 1]

  if (!chainId) return null

  return (
    <>
      {isModalOpen && (
        <TempModal className="network_modal_container" open={isModalOpen} onClose={toggleNetworkModal}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="network_modal">
            <h1 className="text-blue font-bold">Select Network</h1>
            <div
              style={{
                display: 'grid',
                gridAutoFlow: 'row dense',
                padding: '1rem',
                gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
                overflowY: 'auto',
                gap: '1rem',
                fontSize: '0.9rem',
              }}
            >
              {[
                SupportedChainId.ETHEREUM,
                SupportedChainId.POLYGON,
                SupportedChainId.ARBITRUM,
                SupportedChainId.AVALANCHE,
                // SupportedChainId.AURORA,
                SupportedChainId.MOONRIVER,
                SupportedChainId.FANTOM,
                SupportedChainId.BSC,
                SupportedChainId.HARMONY,
              ]
                // .sort((key) => (chainId === key ? -1 : 0))
                .map((key: number, i: number) => {
                  if (chainId === key) {
                    return (
                      <div
                        key={i}
                        style={{
                          outline: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          width: '100%',
                          padding: '1rem 0.75rem',
                          cursor: 'default',
                          opacity: !supportedChains.includes(key) ? '0.3' : '1',
                        }}
                        className="hover_transparent emphasized-selected"
                      >
                        <img
                          // @ts-ignore TYPE NEEDS FIXING
                          src={NETWORK_ICON[key]}
                          alt="Switch Network"
                          style={{ borderRadius: '9999px' }}
                          width="32px"
                          height="32px"
                        />
                        <h1 style={{ fontWeight: 700 }} className="text-blue">
                          {NETWORK_LABEL[key]}
                        </h1>
                      </div>
                    )
                  }
                  return (
                    <button
                      key={i}
                      onClick={async () => {
                        // setSelectedChain(SUPPORTED_NETWORKS[key].rubicName)
                        console.debug(`Switching to chain ${key}`, SUPPORTED_NETWORKS[key])
                        const params = SUPPORTED_NETWORKS[key]
                        toggleNetworkModal()
                        try {
                          await (ethereum as any).request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: `0x${key.toString(16)}` }],
                          })
                          if (key !== chainId) {
                            window.location.href = '/ethereum/#/pool'
                          }
                        } catch (switchError) {
                          // This error code indicates that the chain has not been added to MetaMask.
                          // @ts-ignore TYPE NEEDS FIXING
                          if (switchError.code === 4902) {
                            try {
                              await (ethereum as any).request({
                                method: 'wallet_addEthereumChain',
                                params: params,
                              })
                            } catch (addError) {
                              // handle "add" error
                              console.error(`Add chain error ${addError}`)
                            }
                          }
                          console.error(`Switch chain error ${switchError}`)
                          // handle other "switch" errors
                        }
                      }}
                      style={{
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        width: '100%',
                        padding: '0.75rem 1rem',
                        border: 'none',
                        borderRadius: '7px',
                        background: 'none',
                        cursor: 'pointer',
                        opacity: !supportedChains.includes(key) ? '0.3' : '1',
                      }}
                      className={'hover_transparent hover_shadow'}
                      disabled={!supportedChains.includes(key)}
                    >
                      {/*@ts-ignore TYPE NEEDS FIXING*/}
                      <img
                        src={NETWORK_ICON[key]}
                        alt="Switch Network"
                        style={{ borderRadius: '9999px' }}
                        width="32px"
                        height="32px"
                      />
                      <h1
                        style={{
                          fontWeight: 700,
                          color: 'rgb(5,25,90)',
                          fontSize: '0.9rem',
                        }}
                      >
                        {NETWORK_LABEL[key]}
                      </h1>
                    </button>
                  )
                })}
            </div>
          </div>
        </TempModal>
      )}
    </>
  )
}

export default SwitchNetworkModal
