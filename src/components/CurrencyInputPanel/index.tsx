/* eslint-disable */

import React, { useState, useCallback } from 'react'
import { Currency } from '@pancakeswap-libs/sdk-v2'
import Pair from '../../entities/pair'
import { Button, ChevronDownIcon, Text } from '@pancakeswap-libs/uikit'
import styled from 'styled-components'
import { darken } from 'polished'
import useI18n from 'hooks/useI18n'
import { useCurrencyBalance } from '../../state/wallet/hooks'
import CurrencySearchModal from '../SearchModal/CurrencySearchModal'
import CurrencyLogo from '../CurrencyLogo'
import DoubleCurrencyLogo from '../DoubleLogo'
import { RowBetween } from '../Row'
import { Input as NumericalInput } from '../NumericalInput'
import { useActiveWeb3React } from '../../hooks'

import './CurrencyInputPanel.css'

const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`
const CurrencySelect = styled.button<{ selected: boolean }>`
  align-items: center;
  height: 34px;
  font-size: 16px;
  font-weight: 500;
  background-color: #fff;
  color: #000;
  border-radius: 12px;
  outline: none;
  cursor: pointer;
  user-select: none;
  border: none;
  padding: 0 0.5rem;
  :focus,
  :hover {
    background-color: ${({ theme }) => darken(0.05, '#fff')};
  }
`
const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
  span:hover {
    cursor: pointer;
    color: red !important;
  }
`
const Aligner = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const InputPanel = styled.div<{ hideInput?: boolean }>`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: ${({ hideInput }) => (hideInput ? '8px' : '20px')};
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;
`
const Container = styled.div<{ hideInput: boolean }>`
  border-radius: 14px;
  background-color: rgb(236 241 248);
  border: 1px solid #ebebeb;
  // box-shadow: rgb(33 33 33 / 20%) 0px 0px 16px;
`
interface CurrencyInputPanelProps {
  value: string
  onUserInput: (value: string) => void
  onMax?: () => void
  showMaxButton: boolean
  label?: string
  onCurrencySelect?: (currency: Currency) => void
  currency?: Currency | null
  disableCurrencySelect?: boolean
  hideBalance?: boolean
  pair?: Pair | null
  hideInput?: boolean
  otherCurrency?: Currency | null
  id: string
  showCommonBases?: boolean
}
export default function CurrencyInputPanel({
  value,
  onUserInput,
  onMax,
  showMaxButton,
  label,
  onCurrencySelect,
  currency,
  disableCurrencySelect = false,
  hideBalance = false,
  pair = null, // used for double token logo
  hideInput = false,
  otherCurrency,
  id,
  showCommonBases,
}: CurrencyInputPanelProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const { account } = useActiveWeb3React()
  const selectedCurrencyBalance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  // console.log(selectedCurrencyBalance?.toSignificant(6))
  const TranslateString = useI18n()
  const translatedLabel = label || TranslateString(132, 'Input')
  const handleDismissSearch = useCallback(() => {
    setModalOpen(false)
  }, [setModalOpen])
  return (
    <InputPanel
      className="hover_shadow"
      style={{ boxShadow: 'rgba(33, 33, 33, 0.2) 0px 0px 16px', background: 'rgb(236 241 248)' }}
      id={id}
    >
      <div className="currency_input">
        <Container hideInput={hideInput} className="sokuSwap__container">
          {!hideInput && (
            <LabelRow>
              <RowBetween>
                <Text style={{ fontWeight: 'bold', color: '#05195a' }} fontSize="14px">
                  {translatedLabel}
                </Text>
                {account && (
                  <Text
                    onClick={onMax}
                    fontSize="14px"
                    style={{ display: 'inline', cursor: 'pointer', color: '#c9c9c9', fontWeight: 'bold' }}
                  >
                    {!hideBalance && !!currency && selectedCurrencyBalance
                      ? `Max: ${selectedCurrencyBalance?.toSignificant(10).substring(0, 10)}`
                      : ' -'}
                  </Text>
                )}
              </RowBetween>
            </LabelRow>
          )}
          <InputRow
            className="inputRow"
            style={hideInput ? { padding: '0', borderRadius: '8px' } : {}}
            selected={disableCurrencySelect}
          >
            {!hideInput && (
              <>
                <NumericalInput
                  className="token-amount-input"
                  value={value}
                  onUserInput={(val) => {
                    onUserInput(val)
                  }}
                />
                {account && currency && showMaxButton && label !== 'To' && (
                  <Button onClick={onMax} scale="sm" variant="text" className="maxButton">
                    MAX
                  </Button>
                )}
              </>
            )}
            <CurrencySelect
              selected={!!currency}
              className="network_modal_button text-sm"
              // className="open-currency-select-button currencySelector"
              onClick={() => {
                if (!disableCurrencySelect) {
                  setModalOpen(true)
                }
              }}
              style={{ background: 'transparent' }}
            >
              <Aligner>
                {pair ? (
                  <DoubleCurrencyLogo currency0={pair.token0} currency1={pair.token1} size={16} margin />
                ) : currency ? (
                  <CurrencyLogo currency={currency} size="24px" style={{ marginRight: '8px' }} />
                ) : null}
                {pair ? (
                  <Text id="pair">
                    {pair?.token0.symbol}:{pair?.token1.symbol}
                  </Text>
                ) : (
                  <div style={{ display: 'flex' }}>
                    <Text id="pair">
                      {(currency && currency.symbol && currency.symbol.length > 20
                        ? `${currency.symbol.slice(0, 4)}...${currency.symbol.slice(
                            currency.symbol.length - 5,
                            currency.symbol.length
                          )}`
                        : currency?.symbol) || TranslateString(1196, 'Select a Token')}
                    </Text>
                    {!disableCurrencySelect && <ChevronDownIcon />}
                  </div>
                )}
              </Aligner>
            </CurrencySelect>
          </InputRow>
        </Container>
      </div>
      {!disableCurrencySelect && onCurrencySelect && (
        <CurrencySearchModal
          isOpen={modalOpen}
          onDismiss={handleDismissSearch}
          onCurrencySelect={onCurrencySelect}
          selectedCurrency={currency}
          otherSelectedCurrency={otherCurrency}
          showCommonBases={showCommonBases}
        />
      )}
    </InputPanel>
  )
}
