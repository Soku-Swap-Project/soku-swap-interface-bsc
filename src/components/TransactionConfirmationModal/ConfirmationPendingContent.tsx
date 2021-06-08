/* eslint-disable */

import { LoadingOutlined } from '@ant-design/icons'
import { Text } from '@pancakeswap-libs/uikit'
import React from 'react'
import styled from 'styled-components'
import { AutoColumn } from '../Column'
import { Spinner } from '../Shared'
import { ConfirmedIcon, ContentHeader, Section, Wrapper } from './helpers'

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string }

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
  height: ${({ size }) => size};
  width: ${({ size }) => size};
`

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Waiting for confirmation</ContentHeader>
        <ConfirmedIcon>
          <LoadingOutlined className="loader" style={{ fontSize: 100 }} spin />
        </ConfirmedIcon>
        <AutoColumn gap="12px" justify="center">
          <AutoColumn gap="12px" justify="center">
            <Text fontSize="14px">
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
