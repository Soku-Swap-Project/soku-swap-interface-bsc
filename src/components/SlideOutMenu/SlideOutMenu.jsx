/* eslint-disable */
import React, { useState } from 'react'
import { css } from '@emotion/css'
import { NavLink } from 'react-router-dom'
import useTransak from 'hooks/useTransak'

import '../Menu/Menu.css'

const easeSlow = css`
  transition: all 450ms ease-in-out;
`

const menuBtn = css`
  position: relative;
  right: 35px;
  z-index: 3;
  cursor: pointer;
  ${easeSlow};
  &.closer {
    position: fixed;
    transform: rotate(180deg);
  }
`

const btnLine = css`
  width: 25px;
  height: 3px;
  margin: 0 0 5px 0;
  background-color: #fff;
  ${easeSlow};
  &.closer {
    background-color: #fff;
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 17px;
    }
    &:nth-child(2) {
      transform: translateX(-8px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 17px;
    }
  }
`

const close = css`
  display: none;
`

const menuOverlay = css`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  border: none;
  border-radius: 10px;
  height: auto;
  background: linear-gradient(100deg, #05195a 20%, #040f31);
  color: #fff;
  width: 600px;
  min-height: 100vh;
  transform: translateX(100%);
  transition: all 500ms ease-in-out;
  .test {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &.show {
    background: linear-gradient(100deg, #05195a 20%, #040f31);
    transform: translateX(0%);
  }

  @media (max-width: 800px) {
    width: 55vw;
  }
`

class SlideOutMenu extends React.Component {
  state = {
    isMenuOpen: false,
    closed: false,
  }

  toggleMenu = () => this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }))

  render() {
    const { isMenuOpen } = this.state
    const { launchTransak } = useTransak()
    return (
      <nav className="mobile_navbar">
        <div className="mobile_menu_logo">
          <NavLink to="/swap">
            <img src="https://i.ibb.co/Qfm7690/Soku-Swap-Web-Logo-White.png" alt="SokuSwap Logo" srcset="" />
          </NavLink>
        </div>

        <div className={`${menuBtn} ${isMenuOpen ? 'closer' : null}`} onClick={this.toggleMenu}>
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
        </div>

        <div className={`${menuOverlay} ${isMenuOpen ? 'show' : null}`}>
          <div className="mobile_menu_header">
            <h1>Menu</h1>
          </div>
          <div>
            <ul>
              <div className="mobile_menu_list">
                <NavLink className="nav_link" onClick={this.toggleMenu} activeClassName="active" to="/swap">
                  <li>Swap</li>
                </NavLink>

                <NavLink className="nav_link" onClick={this.toggleMenu} activeClassName="active" to="/limit-order">
                  <li>Limit Orders</li>
                </NavLink>
                <NavLink className="nav_link" onClick={this.toggleMenu} activeClassName="active" to="/pool">
                  <li>Pool</li>
                </NavLink>
                <NavLink className="nav_link" onClick={this.toggleMenu} activeClassName="active" to="/bridge">
                  <li>Bridge</li>
                </NavLink>
                <a className="nav_link" href={`${origin}/bsc/farms`}>
                  <li>Farms</li>
                </a>
                <a className="nav_link" href={`${origin}/bsc/staking`}>
                  <li>Staking</li>
                </a>
                <a
                  className="nav_link"
                  onClick={() => {
                    this.toggleMenu()
                    launchTransak()
                  }}
                >
                  <li>Deposit</li>
                </a>
                {/* <NavLink className="nav_link" onClick={this.toggleMenu} activeClassName="active" to="/deposit">
                  <li>Deposit</li>
                </NavLink> */}
                <hr />
                <a href="https://sokuswap-2.gitbook.io/sokuswap-gitbook/" rel="noreferrer noopener" target="_blank">
                  <span className="material-icons">school</span>
                  <p>Docs</p>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SlideOutMenu
