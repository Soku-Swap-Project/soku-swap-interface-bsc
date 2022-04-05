import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Menu as UikitMenu, useWalletModal } from '@pancakeswap-libs/uikit'
import { ChainId } from '@pancakeswap-libs/sdk-v2'
/* eslint-disable */

import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'

import ClaimSokuModal from 'components/ClaimSokuModal'
import AccountModal from 'components/AccountModal'

import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import useTransak from 'hooks/useTransak'
import links from './config'

import './Menu.css'

/* eslint-disable */

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { launchTransak } = useTransak()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  const truncatedFirstHalf = account?.substring(0, 5)
  const truncatedLastHalf = account?.substring(account.length - 5, account.length)
  const truncatedAddress = `${truncatedFirstHalf}...${truncatedLastHalf}`

  const isBSC = window.location.href.includes('/bsc/')
  const isMobile = window.innerWidth <= 500

  // console.log(window.outerWidth)
  // console.log(window.innerWidth)

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinks')
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  const origin = window.location.origin

  return (
    <div className="sokuswap__navbar">
      <nav>
        <ul className="navbar__items">
          <NavLink to="/">
            <img
              className="nav_logo"
              style={{ height: '50px' }}
              alt="Logo"
              src="https://app.sokuswap.finance/bsc/images/Web-Corner-Logo.png"
            />
          </NavLink>
          <div className="navbar__options">
            <NavLink className="nav_link" activeClassName="active" to="/swap">
              <li>Swap</li>
            </NavLink>

            <NavLink className="nav_link" activeClassName="active" to="/limit-order">
              <li>Limit Orders</li>
            </NavLink>

            {/* {isBSC && (
              <NavLink className="nav_link" activeClassName="active" to="/stop-loss">
                <li>Stop Loss</li>
              </NavLink>
            )} */}
            <NavLink className="nav_link" to="/pool" activeClassName="active">
              <li>Pool</li>
            </NavLink>
            <a className="nav_link" href={`${origin}/bridge`}>
              <li>Bridge</li>
            </a>
            <a className="nav_link" href={`${origin}/bsc/farms`}>
              <li>Farms</li>
            </a>
            <a className="nav_link" href={`${origin}/bsc/staking`}>
              <li>Staking</li>
            </a>
            {/* <NavLink className="nav_link" activeClassName="active" to="/deposit">
              <li>Deposit</li>
            </NavLink> */}
            <a className="nav_link" onClick={() => launchTransak()}>
              <li>Deposit</li>
            </a>
            {/* <NavLink className="nav_link" activeClassName="active" to="/deposit">
              <li>Deposit</li>
            </NavLink> */}
            {/* <NavLink className="nav_link" to="/soku" activeClassName="active">
              <li>SOKU</li>
            </NavLink> */}
          </div>
        </ul>
        <ul className="connectWallet__options__DESKTOP">
          {account ? (
            // <li className="account" onClick={onPresentConnectModal}>
            //   Account: {truncatedAddress}
            // </li>
            <AccountModal />
          ) : (
            <li className="connectWallet__nav">
              <button type="button" onClick={onPresentConnectModal}>
                Connect Wallet
              </button>
            </li>
          )}

          <li className="claimSoku__nav">
            <ClaimSokuModal />
          </li>
          <li>
            <button type="button" className="material-icons" onClick={openHiddenLinks}>
              more_horiz
            </button>
          </li>
        </ul>
        <ul className="hidden_navLinks" id="hidden_navLinks">
          <li>
            <a href="/" rel="noreferrer noopener" className="disabled_link" target="_blank">
              <span className="material-icons">analytics</span>
              <p>Analytics</p>
            </a>
          </li>

          <li className="hidden_navLink">
            <a href="https://sokuswap-2.gitbook.io/sokuswap-gitbook/" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">school</span>
              <p>Docs</p>
            </a>
          </li>
          <li className="hidden_navLink">
            <a href="https://github.com/Soku-Swap-Project" rel="noreferrer noopener" target="_blank">
              <GitHubIcon />
              <p>GitHub</p>
            </a>
          </li>
          <div
            className="social_icon_header"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '18px' }}
          >
            <p style={{ fontSize: '14px', marginLeft: '-5px' }} className="hidden_navLink">
              Social Links
            </p>
          </div>
          <hr style={{ width: '65%', marginTop: '10px', paddingTop: '0' }} className="disabled_link" />

          <li className="hidden_navLink" style={{ paddingTop: '16px' }}>
            <a href="https://t.me/SokuSwap" rel="noreferrer noopener" target="_blank">
              <TelegramIcon />
              <p>Telegram</p>
            </a>
          </li>
          <li className="hidden_navLink">
            <a href="https://twitter.com/sokuswap" rel="noreferrer noopener" target="_blank">
              <TwitterIcon />
              <p>Twitter</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// <UikitMenu
//   links={links}
//   account={account as string}
//   login={login}
//   logout={logout}
//   isDark={isDark}
//   toggleTheme={toggleTheme}
//   currentLang={selectedLanguage?.code || ''}
//   langs={allLanguages}
//   setLang={setSelectedLanguage}
//   cakePriceUsd={cakePriceUsd}
//   profile={profile}
//   {...props}
// />

export default Menu
