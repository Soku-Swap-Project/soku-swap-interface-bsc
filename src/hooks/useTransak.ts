/* eslint-disable new-cap */
import React from 'react'
import transakSDK from '@transak/transak-sdk'

function useTransak() {
  const launchTransak = () => {
    const transak = new transakSDK({
      apiKey: '7d615e11-b4cb-4545-b3c7-ec52963b3d24', // Your API Key
      environment: 'PRODUCTION', // STAGING/PRODUCTION
      defaultNetwork: 'bsc',
      cryptoCurrencyList: 'bnb,busd,sushi,twt,eth,usdt,dai,usdc,uni,link,aave,mana,ctsi,dao,swap,yld',
      networks: 'bsc,ethereum',
      walletAddress: '', // Your customer's wallet address
      themeColor: '05195a', // App theme color
      fiatCurrency: '', // INR/GBP
      email: '', // Your customer's email address
      redirectURL: '',
      hostURL: window.location.origin,
      widgetHeight: '650px',
      widgetWidth: '100%',
      hideMenu: 'true',
      exchangeScreenTitle: 'Deposit',
    })

    transak.init()

    // To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
      //   console.log(data)
    })

    // This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
      // console.log(orderData)
      transak.close()
    })
  }
  return { launchTransak }
}

export default useTransak
