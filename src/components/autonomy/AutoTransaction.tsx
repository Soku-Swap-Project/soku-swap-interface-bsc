import React, { useCallback } from 'react'
import { ethers } from 'ethers'
import { Token } from '@pancakeswap-libs/sdk-v2'
import { useRegistryContract } from '../../hooks/useContract'
import CurrencyLogo from '../CurrencyLogo'
import { Transaction } from './AutoHistoryStyles'

interface TxProps {
  tx: any
  tokenPair: {
    input: Token
    output: Token
  }
}

export default ({ tx, tokenPair }: TxProps) => {
  if (!tx || !tokenPair) return null

  const registryContract = useRegistryContract()

  const cancelTx = useCallback(async () => {
    if (!registryContract) return
    const transaction = await registryContract.cancelHashedReq(tx.id, [
      tx.requester,
      tx.target,
      tx.referer,
      tx.callData,
      tx.initEthSent,
      tx.ethForCall,
      tx.verifySender,
      tx.insertFeeAmount,
      tx.payWithAuto,
    ])
    await transaction.wait()
  }, [tx, registryContract])

  const isMobile = window.innerWidth <= 1200

  const inputAmount = ethers.utils.formatUnits(tx.inputAmount, tokenPair.input?.decimals)
  const outputAmount = ethers.utils.formatUnits(tx.outputAmount, tokenPair.output?.decimals)

  return (
    <Transaction>
      <div className="txContainer">
        <small style={{ fontSize: '12px', fontWeight: 'bold', textDecoration: 'underline' }}>{tx.typeof}</small>
        <div style={{ marginTop: '2px' }} className="txInfo">
          <p style={{ marginTop: '2px', fontWeight: 'bold' }}>
            Sell
            <span className="token">
              <CurrencyLogo currency={tokenPair.input} size="14px" style={{ marginRight: '5px' }} />
              {isMobile ? inputAmount.substring(0, 10) : inputAmount.substring(0, 20)}{' '}
              <div style={{ fontWeight: 'bold', marginLeft: '2px' }}>{tokenPair.input?.symbol}</div>
            </span>
          </p>
          <p style={{ fontWeight: 'bold' }}>
            Buy
            <span className="token">
              <CurrencyLogo currency={tokenPair.output} size="14px" style={{ marginRight: '5px' }} />
              {isMobile ? outputAmount.substring(0, 10) : outputAmount.substring(0, 20)}{' '}
              <div style={{ fontWeight: 'bold', marginLeft: '2px' }}> {tokenPair.output?.symbol}</div>
            </span>
          </p>
        </div>
        <div className="limit_box_footer">
          <div className="txTime">
            <small>
              <i>Placed On: {tx.time}</i>
            </small>
          </div>
          <div className="action">
            {tx.status === 'open' && (
              <button type="button" style={{ backgroundColor: '#05195A' }} onClick={cancelTx}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </Transaction>
  )
}
