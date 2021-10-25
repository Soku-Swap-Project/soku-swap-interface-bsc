import React, { Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import useAuth from 'hooks/useAuth'

import { Menu as UikitMenu, useWalletModal } from '@pancakeswap-libs/uikit'
import ClaimSokuModal from 'components/ClaimSokuModal'
import AccountModal from 'components/AccountModal'

import { useWeb3React } from '@web3-react/core'
import detectEthereumProvider from '@metamask/detect-provider'

import { Credentials, StringTranslations } from '@crowdin/crowdin-api-client'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import { RedirectDuplicateTokenIds, RedirectOldAddLiquidityPathStructure } from './AddLiquidity/redirects'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import AddLiquidity from './AddLiquidity'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Swap from './Swap'
import LimitOrder from './LimitOrder'
import SlideOutMenu from '../components/SlideOutMenu/SlideOutMenu'
// import StopLoss from './StopLoss/index.tsx'
import { RedirectPathToSwapOnly, RedirectHashRoutes } from './Swap/redirects'
import { EN, allLanguages } from '../constants/localisation/languageCodes'
import { LanguageContext } from '../hooks/LanguageContext'
import { TranslationsContext } from '../hooks/TranslationsContext'

import Menu from '../components/Menu'

import useGetDocumentTitlePrice from '../hooks/useGetDocumentTitlePrice'

import './MobileFooter.css'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(250deg, #05195a 20%, #040f31);
  min-height: 92vh;
  height: 100vh;
  // max-height: 100vh;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 650px) and (max-height: 930px) {
    // background-position: bottom 67px right 10px;
    // background-size: 50% !important;
    // border: 1px solid red;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    // background-position: bottom 67px right 10px;
    // background-size: 50% !important;
    // border: 1px solid red;
  }

  @media (min-height: 1100px) {
    // background-position: bottom right 10px !important;
    // background-size: 35% !important;
  }
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  // padding-top: 20vh;
  align-items: center;
  flex: 0.4;
  // height: 88vh;
  // overflow-y: hidden;
  // overflow-x: visible;
  z-index: 1;
  justify-content: center;
  // background-image: url(https://i.ibb.co/DK7D78c/Soku-Mobile-Lower-Logo.png);
  // background-repeat: no-repeat;
  // background-position: bottom 67px right 10px;
  // background-size: 50% !important;
  // height: 100vh !important;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url(https://i.ibb.co/DK7D78c/Soku-Mobile-Lower-Logo.png);
    // background-repeat: no-repeat;
    // background-position: bottom right 20px;
    // background-size: 30% !important;
  }
`

const Marginer = styled.div`
  margin-top: 5rem;
`

declare let window: any

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<any>(undefined)
  const [translatedLanguage, setTranslatedLanguage] = useState<any>(undefined)
  const [translations, setTranslations] = useState<Array<any>>([])
  const apiKey = `${process.env.REACT_APP_CROWDIN_APIKEY}`
  const projectId = parseInt(`${process.env.REACT_APP_CROWDIN_PROJECTID}`)
  const fileId = 6

  const credentials: Credentials = {
    token: apiKey,
  }

  const stringTranslationsApi = new StringTranslations(credentials)

  const getStoredLang = (storedLangCode: string) => {
    return allLanguages.filter((language) => {
      return language.code === storedLangCode
    })[0]
  }

  useEffect(() => {
    const storedLangCode = localStorage.getItem('pancakeSwapLanguage')
    if (storedLangCode) {
      const storedLang = getStoredLang(storedLangCode)
      setSelectedLanguage(storedLang)
    } else {
      setSelectedLanguage(EN)
    }
  }, [])

  const fetchTranslationsForSelectedLanguage = async () => {
    stringTranslationsApi
      .listLanguageTranslations(projectId, selectedLanguage.code, undefined, fileId, 200)
      .then((translationApiResponse) => {
        if (translationApiResponse.data.length < 1) {
          setTranslations(['error'])
        } else {
          setTranslations(translationApiResponse.data)
        }
      })
      .then(() => setTranslatedLanguage(selectedLanguage))
      .catch((error) => {
        setTranslations(['error'])
        console.error(error)
      })
  }

  useEffect(() => {
    if (selectedLanguage) {
      fetchTranslationsForSelectedLanguage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage])

  useGetDocumentTitlePrice()

  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)
  const truncatedFirstHalf = account?.substring(0, 5)
  const truncatedLastHalf = account?.substring(account.length - 5, account.length)
  const truncatedAddress = `${truncatedFirstHalf}...${truncatedLastHalf}`

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinksMobile')
    // console.log(hiddenLinks)
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  const isMobile = window.innerWidth <= 500

  return (
    <Suspense fallback={null}>
      <HashRouter>
        <AppWrapper>
          <LanguageContext.Provider
            value={{ selectedLanguage, setSelectedLanguage, translatedLanguage, setTranslatedLanguage }}
          >
            <TranslationsContext.Provider value={{ translations, setTranslations }}>
              {isMobile ? <SlideOutMenu /> : <Menu />}
              <BodyWrapper>
                <Popups />
                <Web3ReactManager>
                  <Switch>
                    <Route exact strict path="/swap" component={Swap} />
                    <Route exact strict path="/limit-order" component={LimitOrder} />
                    {/* <Route exact strict path="/stop-loss" component={StopLoss} /> */}
                    <Route exact strict path="/find" component={PoolFinder} />
                    <Route exact path="/pool" component={Pool} />
                    <Route exact path="/add" component={AddLiquidity} />
                    <Route exact strict path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />

                    {/* Redirection: These old routes are still used in the code base */}
                    <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                    <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                    <Route exact strict path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                    <Route exact path="/" component={RedirectHashRoutes} />

                    {/* <Route component={RedirectPathToSwapOnly} /> */}
                  </Switch>
                </Web3ReactManager>
                <Marginer />
                <div className="connectWallet__options__MOBILE">
                  <ul>
                    {account ? (
                      <li className="account__footer">
                        <AccountModal />
                      </li>
                    ) : (
                      <li className="connectWallet">
                        <button type="button" onClick={onPresentConnectModal}>
                          Connect Wallet
                        </button>
                      </li>
                    )}
                    <li className="claimSoku">
                      <ClaimSokuModal />
                    </li>
                    <li>
                      <button type="submit" className="material-icons" onClick={openHiddenLinks}>
                        more_horiz
                      </button>
                    </li>
                  </ul>
                  <ul className="hidden_navLinksMobile" id="hidden_navLinks">
                    <li>
                      <a href="https://www.sokuswap.finance/" rel="noreferrer noopener" target="_blank">
                        <span className="material-icons">info</span>
                        <p>About</p>
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Soku-Swap-Project" rel="noreferrer noopener" target="_blank">
                        <span className="material-icons">code</span>
                        <p>Code</p>
                      </a>
                    </li>
                    <li>
                      <a href="/" rel="noreferrer noopener" target="_blank">
                        <span className="material-icons">analytics</span>
                        <p>Analytics</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </BodyWrapper>
            </TranslationsContext.Provider>
          </LanguageContext.Provider>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
