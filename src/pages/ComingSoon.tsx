import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon } from '@pancakeswap-libs/uikit'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(90vh - 64px);
  justify-content: center;
`

const NotFound = () => {
  return (
    <StyledNotFound>
      <img
        src="https://i.ibb.co/Qfm7690/Soku-Swap-Web-Logo-White.png"
        className="sokuswap__logo"
        alt="Soku Swap Logo"
        style={{ height: '100px' }}
      />{' '}
      <Text fontSize="20px" color="white" mb="24px">
        Coming Soon!
      </Text>
      <NavLink to="/">
        <Button style={{ background: '#04bbfb' }} scale="sm">
          Back Home
        </Button>
      </NavLink>
    </StyledNotFound>
  )
}

export default NotFound
