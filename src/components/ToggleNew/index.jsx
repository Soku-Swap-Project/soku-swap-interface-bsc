import React from 'react'
import styled from 'styled-components'
import { useRouteMatch } from "react-router-dom";
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'

/* eslint-disable */

const ToggleNew = () => {
  const { isExact } = useRouteMatch()
  const navigationHandler = (path) => {
    window.location.href = `${origin}/${path}/#/swap`
  }

  return (
    <Wrapper>
      <ButtonMenu activeIndex={isExact ? 1 : 0} scale="sm" variant="primary" >
        <ButtonMenuItem  onItemClick={() => navigationHandler()}>
          <div onClick={() => navigationHandler('ethereum')}>ETH</div>
        </ButtonMenuItem>
        <ButtonMenuItem onItemClick={() => navigationHandler()}>
          <div onClick={() => navigationHandler('bsc')}>BSC</div>
        </ButtonMenuItem>
      </ButtonMenu>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export default ToggleNew
