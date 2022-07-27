/* eslint-disable */

import React from 'react'
import styled from 'styled-components'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { Text } from '@pancakeswap-libs/uikit'
import { Spinner } from '../Shared'
import { AutoColumn } from '../Column'
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  return (
    <Wrapper className="network_modal">
      <Section>
        <ContentHeader onDismiss={onDismiss}>Waiting for confirmation</ContentHeader>
        <ConfirmedIcon>
          <LoadingOutlined className="loader" style={{ fontSize: 100 }} spin />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text color="#04bbfb" fontSize="14px">
              <strong>{pendingText}</strong>
            </Text>
          </AutoColumn>
          <Text fontSize="14px">Confirm this transaction in your wallet</Text>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default ConfirmationPendingContent
