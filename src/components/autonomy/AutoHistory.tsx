import React, { useState } from 'react'
import { getAddress } from '@ethersproject/address'
import { Container, Tabs, TabContent } from './AutoHistoryStyles'
import { useAllTokens } from '../../hooks/Tokens'
import useTransactionHistory from '../../hooks/useAutonomyHistory'
import AutoTransaction from './AutoTransaction'

export default function AutoHistory(type: any) {
  const [transactions] = useTransactionHistory()
  // console.log("@@@",transactions)

  const allTokens = useAllTokens()
  const [currentTab, setCurrentTab] = useState('open')
  const mode = type

  const txTokenPairs = transactions
    .map((tx: any) => {
      if (tx && tx.inputToken && tx.outputToken) {
        return {
          input: allTokens[getAddress(tx.inputToken)],
          output: allTokens[getAddress(tx.outputToken)],
        }
      }
      return null as any
    })
    .filter((txPair: any) => !!txPair)

  return (
    <Container className="emphasized_swap_layout">
      <Tabs>
        <div
          style={{ color: '#05195a' }}
          role="presentation"
          onClick={() => setCurrentTab('open')}
          onKeyDown={() => setCurrentTab('open')}
          className={`tabItem hover_shadow_button ${currentTab === 'open' ? 'emphasized-selected' : ''}`}
        >
          <span>Open</span>
        </div>
        <div
          style={{ color: '#05195a' }}
          role="presentation"
          onClick={() => setCurrentTab('cancelled')}
          onKeyDown={() => setCurrentTab('cancelled')}
          className={`tabItem hover_shadow_button ${currentTab === 'cancelled' ? 'emphasized-selected' : ''}`}
        >
          <span>Cancelled</span>
        </div>
        <div
          style={{ color: '#05195a' }}
          role="presentation"
          onClick={() => setCurrentTab('executed')}
          onKeyDown={() => setCurrentTab('executed')}
          className={`tabItem hover_shadow_button ${currentTab === 'executed' ? 'emphasized-selected' : ''}`}
        >
          <span>Executed</span>
        </div>
      </Tabs>
      <TabContent>
        {transactions.map(
          (tx: any, i: number) =>
            tx &&
            tx.typeof === mode.type &&
            tx.status === currentTab && <AutoTransaction tx={tx} tokenPair={txTokenPairs[i]} />
        )}
      </TabContent>
    </Container>
  )
}
