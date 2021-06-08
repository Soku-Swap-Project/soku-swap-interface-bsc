import React from 'react'
import { Button, ButtonProps, useWalletModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

import './ConnectWalletButton.css'

const UnlockButton = () => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <button className="sokuswap__swapButton swap_connectWallet" onClick={onPresentConnectModal} type="button">
      Connect Wallet
    </button>
  )
}

export default UnlockButton
