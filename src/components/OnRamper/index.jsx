/* eslint-disable */
import React from 'react'
import OnramperWidget from '@onramper/widget'

import './style.css'

export default function WidgetContainer() {
  const wallets = {
    BTC: { address: 'btcAddr' },
    BNB: { address: 'bnbAddress', memo: 'cryptoTag' },
  }

  const api = 'pk_prod_8pugnhoFMGuoKjAxukMcFukKszLfNMZ0VCRX94kYkb00'

  return (
    <div className="onramper_container">
      <OnramperWidget
        API_KEY={api}
        color={'05195a'}
        fontFamily={'Helvetica'}
        defaultAddrs={wallets}
        defaultAmount={100}
        defaultCrypto={'BNB'}
        defaultFiat={'USD'}
        defaultFiatSoft={'USD'}
        defaultPaymentMethod={'creditCard'}
      />
    </div>
  )
}
