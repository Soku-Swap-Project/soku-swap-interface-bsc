import React from 'react'
// import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
// import useI18n from 'hooks/useI18n'

import './SokuSwap.css'

// const StyledNav = styled.div`
//   margin-bottom: 40px;
// `

function SokuSwapLogo() {
  // const TranslateString = useI18n()

  return (
    <div>
      <img
        src="https://i.ibb.co/Qfm7690/Soku-Swap-Web-Logo-White.png"
        className="sokuswap__logo"
        alt="Soku Swap Logo"
      />
    </div>

    // <StyledNav>
    //   <ButtonMenu activeIndex={activeIndex} scale="sm" variant="subtle">
    //     <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
    //       {TranslateString(1142, 'Swap')}
    //     </ButtonMenuItem>
    //     <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
    //       {TranslateString(262, 'Liquidity')}
    //     </ButtonMenuItem>
    //     <ButtonMenuItem
    //       id="pool-nav-link"
    //       as="a"
    //       href="https://www.binance.org/en/bridge?utm_source=PancakeSwap"
    //       target="_blank"
    //       rel="noreferrer noopener"
    //     >
    //       Bridge
    //     </ButtonMenuItem>
    //   </ButtonMenu>
    // </StyledNav>
  )
}

export default SokuSwapLogo
