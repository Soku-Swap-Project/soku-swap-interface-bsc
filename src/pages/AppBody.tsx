import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap-libs/uikit'

export const BodyWrapper = styled(Card)`
  display: block;
  position: relative;
  // border: 1px solid white;
  border-radius: 16px;
  // background-color: #fff;
  width: 42rem;
  max-width: 420px;
  padding: 20px;
  color: #05195a;
  // box-shadow: 0.75px 0.75px 20px 0.1px #04bbfb;
  overflow: visible;
  box-sizing: content-box;
  // padding-bottom: 35px;

  @media (max-width: 650px) {
    width: 20rem !important;
    min-width: 16rem !important;
    padding: 20px !important;
  }
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper className="emphasized_swap_layout">{children}</BodyWrapper>
}
