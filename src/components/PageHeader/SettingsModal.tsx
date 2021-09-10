import React from 'react'
import styled from 'styled-components'
import { Modal } from '@pancakeswap-libs/uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
import AutonomyPrepaySetting from './AutonomyPrepaySetting'

type SettingsModalProps = {
  onDismiss?: () => void,
  translateString: (translationId: number, fallback: string) => (string)
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss, translateString }: SettingsModalProps) => {
  return (
    <Modal title={translateString(1200, 'Settings')} onDismiss={onDismiss}>
      <SlippageToleranceSetting translateString={translateString}/>
      <TransactionDeadlineSetting translateString={translateString}/>
      <AutonomyPrepaySetting />
    </Modal>
  )
}

export default SettingsModal
