import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorLocalStorageKey, ConnectorNames } from '@pancakeswap-libs/uikit'
import useToast from 'hooks/useToast'
import { connectorsByName } from 'connectors'
import { profileClear } from 'state/profile'
import { useAppDispatch } from 'state'
import { ToastError } from 'style/Toasts'
import { toast } from 'react-toastify'

const useAuth = () => {
  const { activate, deactivate } = useWeb3React()
  const { toastError } = useToast()
  const dispatch = useAppDispatch()

  const login = useCallback((connectorID: ConnectorNames) => {
    const connector = connectorsByName[connectorID]
    if (connector) {
      activate(connector, async (error: Error) => {
        window.localStorage.removeItem(connectorLocalStorageKey)
        if (error instanceof UnsupportedChainIdError) {
          toast.error(
            ToastError(
              'Unsupported Chain Id',
              'Unsupported Chain Id Error. Please make sure you are connected to the correct network.'
            )
          )
        } else if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
          toast.error(
            ToastError(
              'Provider Error',
              'No provider was found. If on mobile, please connect to your specified wallet through WalletConnect.'
            )
          )
        } else if (
          error instanceof UserRejectedRequestErrorInjected ||
          error instanceof UserRejectedRequestErrorWalletConnect
        ) {
          if (connector instanceof WalletConnectConnector) {
            const walletConnector = connector as WalletConnectConnector
            walletConnector.walletConnectProvider = null
          }
          toast.error(ToastError('Authorization Error', 'Please authorize to access your account'))
        } else {
          ToastError(error.name, error.message)
        }
      })
    } else {
      toast.error(ToastError("Can't find connector", 'The connector config is wrong'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const logout = useCallback(() => {
    dispatch(profileClear())
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [deactivate, dispatch])

  return { login, logout }
}

export default useAuth
