/* eslint-disable */

import React, { useContext, useMemo, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from '@pancakeswap-libs/sdk-v2'
import ModalVideo from 'react-modal-video'

// import { Pair } from '../../entities/pair'
import { Button, CardBody, Flex, Text } from '@pancakeswap-libs/uikit'
import { Link } from 'react-router-dom'
import CardNav from 'components/CardNav'
import Question from 'components/QuestionHelper'
import FullPositionCard from 'components/PositionCard'
import { useTokenBalancesWithLoadingIndicator } from 'state/wallet/hooks'
import { StyledInternalLink } from 'components/Shared'
import { LightCard } from 'components/Card'
import { RowBetween } from 'components/Row'
import { AutoColumn } from 'components/Column'

import { useActiveWeb3React } from 'hooks'
import { usePairs } from 'data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from 'state/user/hooks'
import { Dots } from 'components/swap/styleds'
import useI18n from 'hooks/useI18n'
import PageHeader from 'components/PageHeader'
import AppBody from '../AppBody'
import MobileHeader from 'components/MobileHeader'

import './pools.css'
import 'react-modal-video/css/modal-video.css'

export default function Pool() {
  // const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()
  const TranslateString = useI18n()
  // modal video
  const [isOpen, setOpen] = useState(false)

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens]
  )
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))

  // console.log(liquidityTokensWithBalances)
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  document.title = 'SokuSwap | BSC | Pools'

  const isMobile = window.innerWidth <= 1200

  return (
    <>
      {isMobile && <MobileHeader page={'Liquidity Pools'} />}
      <div className="modal_video">
        <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="2HXOv6nTm0E" onClose={() => setOpen(false)} />
      </div>
      <AppBody>
        <div className="sokuswap__heading">
          <h2>Liquidity</h2>
          <div>
            <Button className="hover_shadow emphasize_swap_button" as={Link} to="/add/">
              {TranslateString(168, 'Add Liquidity')}
            </Button>
          </div>
        </div>
        <AutoColumn gap="lg" justify="center">
          <CardBody>
            <Flex flexDirection="column">
              <RowBetween padding="0 8px">
                <Text color="#04b9fb">{TranslateString(107, 'Your Liquidity')}</Text>
                <Question
                  text={TranslateString(
                    1170,
                    'When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.'
                  )}
                />
              </RowBetween>

              {!account ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    {TranslateString(156, 'Connect to a wallet to view your liquidity.')}
                  </Text>
                </LightCard>
              ) : v2IsLoading ? (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    <Dots>Loading</Dots>
                  </Text>
                </LightCard>
              ) : allV2PairsWithLiquidity?.length > 0 ? (
                <>
                  {allV2PairsWithLiquidity.map((v2Pair) => (
                    <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                  ))}
                </>
              ) : (
                <LightCard padding="40px">
                  <Text color="textDisabled" textAlign="center">
                    {TranslateString(104, 'No liquidity found.')}
                  </Text>
                </LightCard>
              )}

              <div>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(106, "Don't see a pool you joined?")}{' '}
                  <StyledInternalLink className="hover_shadow_icon" id="import-pool-link" to="/find">
                    {TranslateString(108, 'Import it.')}
                  </StyledInternalLink>
                </Text>
                <Text fontSize="14px" style={{ padding: '.5rem 0 .5rem 0' }}>
                  {TranslateString(1172, 'Or, if you staked your LP tokens in a farm, unstake them to see them here.')}
                </Text>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px',
                    fontWeight: '900',
                  }}
                  className="hover_shadow_icon"
                >
                  <p style={{ color: '#04bbfb', fontSize: '14px', cursor: 'pointer' }} onClick={() => setOpen(true)}>
                    How to add liquidity?
                  </p>
                </div>
              </div>
            </Flex>
          </CardBody>
        </AutoColumn>
      </AppBody>
    </>
  )
}
