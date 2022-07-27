/* eslint-disable */
import React, { FC, useState } from 'react'
import { css } from '@emotion/css'
import { NavLink } from 'react-router-dom'
import SchoolIcon from '@mui/icons-material/School'
import MenuIcon from '@mui/icons-material/Menu'
import useTransak from 'hooks/useTransak'
import { NETWORK_ICON, NETWORK_LABEL_SHORT, SupportedChainId } from 'config/networks'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import ClaimSokuModal from 'components/ClaimSokuModal'
import AccountModal from 'components/AccountModal'
import { useWalletModal } from '@pancakeswap-libs/uikit'

// import '../Menu/Menu.css'

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
  background-color: #05195a;
  ${easeSlow};
  &.closer {
    background-color: #05195a;
    &:nth-child(1) {
      transform: rotate(45deg) translate(4px, 0px);
      width: 12px;
    }
    &:nth-child(2) {
      transform: translateX(-14px);
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(4px, 0px);
      width: 12px;
    }
    visibility: hidden;
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
  // border-radius: 10px;
  height: auto;
  background: #ecf1f8;
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
    // background: linear-gradient(100deg, #05195a 20%, #040f31);
    transform: translateX(0%);
    box-shadow: 2px 20px 20px 3px rgb(0 0 0 / 33%);
  }

  @media (max-width: 850px) {
    width: 30vw;
  }

  @media (max-width: 550px) {
    width: 45vw;
  }
`

const SlideOutMenu: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const { launchTransak } = useTransak()
  const { login, logout } = useAuth()
  const { account, chainId, library } = useWeb3React()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const isTradeActive = window.location.pathname === '/cross-swap' || window.location.pathname === '/swap'
  const origin = window.location.origin

  return (
    <nav className="mobile_navbar">
      <div>
        <div className="mobile_menu_logo">
          <div className="flex items-center w-6 mr-4 logo_shadow">
            <img
              style={{ maxWidth: 'none', objectFit: 'contain', width: '30px' }}
              src="https://i.ibb.co/sm60Zb7/Soku-Logo-400x400.png"
              alt="SokuSwap logo"
              // layout="responsive"
            />
          </div>
        </div>
      </div>
      {/* 
      <div>
        <div className={`${menuBtn} ${isMenuOpen ? 'closer' : null}`} onClick={toggleMenu}>
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
          <div className={`${btnLine} ${isMenuOpen ? 'closer' : null}`} />
        </div>
      </div> */}

      <MenuIcon fontSize="medium" onClick={toggleMenu} />

      <div onClick={toggleMenu} className={`${menuOverlay} ${isMenuOpen ? 'show' : null} z-20`}>
        {/* <CloseIcon onClick={toggleMenu} /> */}
        <div className="mobile_menu_header">
          <h1>Menu</h1>
        </div>
        <div>
          <ul>
            <div className="flex flex-col gap-4 px-6">
              {chainId && (
                <div
                  style={{
                    display: 'flex',
                    padding: '10px',
                    fontWeight: 'bold',
                    alignItems: 'center',
                    color: '#05195a',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={NETWORK_ICON[chainId as number]}
                    width="24px"
                    height="24px"
                    style={{ borderRadius: '24px', objectFit: 'contain', marginRight: '8px' }}
                    alt="network icon"
                  />{' '}
                  {NETWORK_LABEL_SHORT[chainId as number]}
                </div>
              )}
            </div>
            <div className="mobile_menu_list">
              <a className="nav_link hover_shadow" href="https://swap.app.sokuswap.finance">
                Trade
              </a>

              <NavLink
                className="nav_link hover_shadow"
                activeClassName="emphasized-selected active_mobile_link"
                to="/limit-order"
              >
                Limit Orders
              </NavLink>
              <NavLink
                className="nav_link hover_shadow"
                activeClassName="emphasized-selected active_mobile_link"
                to="/pool"
              >
                Pool
              </NavLink>
              <a className="nav_link hover_shadow" href={`${origin}/bridge`}>
                Bridge
              </a>
              <a className="nav_link hover_shadow" href={`${origin}/bsc/farms/`}>
                Farms
              </a>
              <a className="nav_link hover_shadow" href={`${origin}/bsc/staking/`}>
                Staking
              </a>

              <a className="nav_link hover_shadow" onClick={() => launchTransak()}>
                Deposit
              </a>
              <hr style={{ height: '1px', border: 0, backgroundColor: '#05195a', margin: '20px' }} />
              <a
                style={{
                  display: 'flex',
                  color: '#05195a',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}
                href="https://sokuswap-2.gitbook.io/sokuswap-gitbook/"
                className="hover_shadow_icon"
                rel="noreferrer noopener"
                target="_blank"
              >
                <SchoolIcon style={{ marginRight: '10px' }} />
                <p className="pl-4">Docs</p>
              </a>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {account ? (
                  <AccountModal />
                ) : (
                  <li className="hover_shadow account_modal_mobile">
                    <button
                      type="button"
                      style={{
                        color: '#05195a',
                        fontWeight: 'bold',
                        border: 'none',
                        background: 'none',
                        whiteSpace: 'nowrap',
                        fontSize: '16px',
                      }}
                      onClick={onPresentConnectModal}
                    >
                      Connect Wallet
                    </button>
                  </li>
                )}
                <li className="claimSoku__nav">
                  <ClaimSokuModal />
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default SlideOutMenu
