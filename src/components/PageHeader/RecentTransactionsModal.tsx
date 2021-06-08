import { Button, CheckmarkCircleIcon, ErrorIcon, Flex, LinkExternal, Modal, Text } from '@pancakeswap-libs/uikit'
import Loader from 'components/Loader'
import { useActiveWeb3React } from 'hooks'
import React, { useMemo } from 'react'
import { isTransactionRecent, useAllTransactions } from 'state/transactions/hooks'
import { TransactionDetails } from 'state/transactions/reducer'
import { getBscScanLink } from 'utils'

type RecentTransactionsModalProps = {
  onDismiss?: () => void
  translateString: (translationId: number, fallback: string) => string
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const newTransactionsFirst = (a: TransactionDetails, b: TransactionDetails) => b.addedTime - a.addedTime

const getRowStatus = (sortedRecentTransaction: TransactionDetails) => {
  const { hash, receipt } = sortedRecentTransaction

  if (!hash) {
    return { icon: <Loader />, color: 'text' }
  }

  if (hash && receipt?.status === 1) {
    return { icon: <CheckmarkCircleIcon color="#04bbfb" />, color: '#04bbfb' }
  }

  return { icon: <ErrorIcon color="#05489c" />, color: '#05489c' }
}

const RecentTransactionsModal = ({ onDismiss = defaultOnDismiss, translateString }: RecentTransactionsModalProps) => {
  const TranslateString = translateString
  const { account, chainId } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  // Logic taken from Web3Status/index.tsx line 175
  const sortedRecentTransactions = useMemo(() => {
    const txs = Object.values(allTransactions)
    return txs.filter(isTransactionRecent).sort(newTransactionsFirst)
  }, [allTransactions])

  return (
    <Modal title={TranslateString(1202, 'Recent transactions')} onDismiss={onDismiss}>
      {!account && (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Text mb="8px" bold color="#05195a">
            Please connect your wallet to view your recent transactions
          </Text>
          <Button style={{ background: '#04bbfb' }} scale="sm" onClick={onDismiss}>
            Close
          </Button>
        </Flex>
      )}
      {account && chainId && sortedRecentTransactions.length === 0 && (
        <Flex justifyContent="center" flexDirection="column" alignItems="center">
          <Text mb="8px" bold color="#05195a">
            No recent transactions
          </Text>
          <Button style={{ background: '#04bbfb' }} scale="sm" onClick={onDismiss}>
            Close
          </Button>
        </Flex>
      )}
      {account &&
        chainId &&
        sortedRecentTransactions.map((sortedRecentTransaction) => {
          const { hash, summary } = sortedRecentTransaction
          const { icon, color } = getRowStatus(sortedRecentTransaction)

          return (
            <>
              <Flex key={hash} alignItems="center" justifyContent="space-between" mb="4px">
                <LinkExternal href={getBscScanLink(chainId, hash, 'transaction')} color={color}>
                  {summary ?? hash}
                </LinkExternal>
                {icon}
              </Flex>
            </>
          )
        })}
    </Modal>
  )
}

export default RecentTransactionsModal
