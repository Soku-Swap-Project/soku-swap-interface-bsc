import React from 'react'
import styled from 'styled-components'
import { Text, Toggle } from '@pancakeswap-libs/uikit'
import { useAutonomyPaymentManager } from 'state/user/hooks'
import QuestionHelper from '../QuestionHelper'

const StyledSettingWrapper = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const AutonomyPrepaySetting = () => {
  const [autonomyPrepay, togglePrepayMode] = useAutonomyPaymentManager()

  return (
    <StyledSettingWrapper>
      <Label>
        <Text style={{ fontWeight: 600, color: '#05489c' }}>Prepay Execution</Text>
        <QuestionHelper
          text='Only available for LimitOrder and StopLoss powered by Autonomy.'
        />
      </Label>
      <Toggle scale="md" checked={autonomyPrepay} onChange={togglePrepayMode} />
    </StyledSettingWrapper>
  )
}

export default AutonomyPrepaySetting
