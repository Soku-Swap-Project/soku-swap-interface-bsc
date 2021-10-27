import React, { useCallback, useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import { AlertTriangle } from 'react-feather'

const WarningContainer = styled.div`
  max-width: 460px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
  margin-bottom: 15px;
`
const StyledWarningIcon = styled(AlertTriangle)`
  stroke: ${({ theme }) => theme.colors.failure};
`

export default function WarningMessage() {
  return (
    <WarningContainer>
      <StyledWarningIcon />
      <Text color="failure">Warning, This product is in beta. Use at your own risk</Text>
    </WarningContainer>
  )
}
