import React from 'react'
import { Button, ButtonProps, useWalletModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import useAuth from 'hooks/useAuth'

// import './ConnectWalletButton.css'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  border-radius: 14px;
  height: 52px;
`

const UnlockButton = () => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledButton
      className="hover_shadow emphasize_swap_button"
      style={{ background: '#05195a', fontWeight: 700, width: '100%' }}
      onClick={onPresentConnectModal}
    >
      Connect Wallet
    </StyledButton>
  )
}

export default UnlockButton
