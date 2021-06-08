import { ChainId } from '@pancakeswap-libs/sdk'
import { Button, LinkExternal } from '@pancakeswap-libs/uikit'
import React, { useContext } from 'react'
import { ArrowUpCircle } from 'react-feather'
import { ThemeContext } from 'styled-components'
import { getBscScanLink } from '../../utils'
import { AutoColumn } from '../Column'
import { ConfirmedIcon, ContentHeader, Section, Wrapper } from './helpers'

type TransactionSubmittedContentProps = {
  onDismiss: () => void
  hash: string | undefined
  chainId: ChainId
}

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
  const theme = useContext(ThemeContext)

  return (
    <Wrapper>
      <Section>
        <ContentHeader onDismiss={onDismiss}>Transaction submitted</ContentHeader>
        <ConfirmedIcon>
          <ArrowUpCircle strokeWidth={0.5} size={97} color={theme.colors.primary} />
        </ConfirmedIcon>
        <AutoColumn gap="8px" justify="center">
          {chainId && hash && (
            <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')}>View on BscScan</LinkExternal>
          )}
          <Button style={{ background: '#04bbfb' }} onClick={onDismiss} mt="20px">
            Close
          </Button>
        </AutoColumn>
      </Section>
    </Wrapper>
  )
}

export default TransactionSubmittedContent
