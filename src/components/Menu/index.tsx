/* eslint-disable */
import React from 'react'
import { Menu as UikitMenu, useWalletModal } from '@pancakeswap-libs/uikit'
import { NavLink } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SchoolIcon from '@mui/icons-material/School'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useTransak from 'hooks/useTransak'
import config from './config'
import ClaimSokuModal from 'components/ClaimSokuModal'
import AccountModal from 'components/AccountModal'
import { NETWORK_ICON, NETWORK_LABEL_SHORT, SupportedChainId } from 'config/networks'

// import './Menu.css'

const Menu = (props) => {
  const { account, chainId } = useWeb3React()
  const { login, logout } = useAuth()
  const { launchTransak } = useTransak()

  const { onPresentConnectModal } = useWalletModal(login, logout)

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinks')
    // console.log(hiddenLinks)
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  const isMobile = window.innerWidth <= 1200

  const HEADER_HEIGHT = 64

  return (
    <>
      <header className="w-full lg:block bottom_border">
        <nav
          style={{ boxShadow: 'none' }}
          className="backdrop-blur-fallback border-none w-full h-full before:backdrop-saturate-[1.2] before:backdrop-blur-[20px] before:z-[-1] before:absolute before:w-full before:h-full border-b border-light-800"
        >
          <div style={{ padding: '0.75rem 1.5rem' }}>
            <div className="flex items-center justify-between gap-4 px-6">
              <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }} className="flex gap-4">
                <div className="flex items-center w-6 mr-4 logo_shadow">
                  <img
                    style={{ maxWidth: 'none', objectFit: 'contain', width: 'auto' }}
                    src="https://bscscan.com/token/images/sokuv2_32.png"
                    alt="SokuSwap logo"
                    // layout="responsive"
                  />
                </div>
                <div className="sokuswap__navbar">
                  <nav className="soku_nav">
                    <ul className="navbar__items">
                      <a className="nav_link hover_transparent" href={`${origin}/swap`}>
                        Trade
                      </a>

                      <NavLink
                        className="nav_link hover_transparent"
                        activeClassName="emphasized-selected active_mobile_link"
                        to="/limit-order"
                      >
                        Limit Orders
                      </NavLink>
                      <NavLink
                        className="nav_link hover_transparent"
                        activeClassName="emphasized-selected active_mobile_link"
                        to="/pool"
                      >
                        Pool
                      </NavLink>
                      <a className="nav_link hover_transparent" href={`${origin}/bridge`}>
                        Bridge
                      </a>
                      <a className="nav_link hover_transparent" href={`${origin}/bsc/farms/`}>
                        Farms
                      </a>
                      <a className="nav_link hover_transparent" href={`${origin}/bsc/staking/`}>
                        Staking
                      </a>

                      <a className="nav_link hover_transparent" onClick={() => launchTransak()}>
                        Deposit
                      </a>
                    </ul>
                    <ul className="connectWallet__options__DESKTOP">
                      {chainId && (
                        <div style={{ display: 'flex', padding: '10px', fontWeight: 'bold', alignItems: 'center' }}>
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
                      {account ? (
                        <AccountModal />
                      ) : (
                        <li className="hover_transparent account_modal">
                          <button
                            type="button"
                            style={{ color: '#05195a', fontWeight: 'bold' }}
                            onClick={onPresentConnectModal}
                          >
                            Connect Wallet
                          </button>
                        </li>
                      )}

                      <li className="claimSoku__nav">
                        <ClaimSokuModal />
                      </li>
                      <li>
                        <MoreHorizIcon
                          className="hover_shadow_icon"
                          style={{ cursor: 'pointer' }}
                          onClick={openHiddenLinks}
                        />
                      </li>
                    </ul>
                    <ul className="hidden_navLinks" id="hidden_navLinks">
                      {/* <li>
            <a href="/" rel="noreferrer noopener" className="disabled_link" target="_blank">
              <span className="material-icons">analytics</span>
              <p>Analytics</p>
            </a>
          </li> */}

                      <li className="hidden_navLink">
                        <a
                          href="https://sokuswap-2.gitbook.io/sokuswap-gitbook/"
                          className="hover_shadow_icon"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          <SchoolIcon />
                          <p>Docs</p>
                        </a>
                      </li>
                      <li className="hidden_navLink">
                        <a
                          href="https://github.com/Soku-Swap-Project"
                          className="hover_shadow_icon"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          <GitHubIcon />
                          <p>GitHub</p>
                        </a>
                      </li>
                      <div
                        className="social_icon_header"
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '12px' }}
                      >
                        <p style={{ fontSize: '14px', marginLeft: '-5px' }} className="hidden_navLink">
                          Social Links
                        </p>
                      </div>
                      <div className="social_icon_row" style={{ display: 'flex', justifyContent: 'center' }}>
                        <hr
                          style={{ width: '65%', marginTop: '10px', paddingTop: '0', borderWidth: '1px' }}
                          className="disabled_link"
                        />
                      </div>

                      <li className="hidden_navLink" style={{ paddingTop: '16px' }}>
                        <a
                          href="https://t.me/SokuSwap"
                          className="hover_shadow_icon"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          <TelegramIcon />
                          <p>Telegram</p>
                        </a>
                      </li>
                      <li className="hidden_navLink">
                        <a
                          href="https://twitter.com/sokuswap"
                          className="hover_shadow_icon"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          <TwitterIcon />
                          <p>Twitter</p>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div style={{ height: HEADER_HEIGHT, minHeight: HEADER_HEIGHT }} />

      {/* <UikitMenu
        account={null}
        login={null}
        logout={null}
        isDark={null}
        toggleTheme={null}
        currentLang={currentLanguage.code}
        langs={languageList}
        setLang={setLanguage}
        cakePriceUsd={cakePriceUsd.toNumber()}
        links={}
        profile={{
          username: profile?.username,
          image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
          profileLink: '/profile',
          noProfileLink: '/profile',
          showPip: !profile?.username,
        }}
        {...props}
      /> */}
    </>
  )
}

export default Menu
