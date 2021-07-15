import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background: linear-gradient(250deg, #05195a 33.3%, #040f31) !important;
    min-height: 100vh;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  * {
    font-family: "Poppins", sans-serif;
  }

  button {
    box-shadow: none !important;
  }

  svg[color="textSubtle"], button svg[color="currentColor"] {
    fill: #04bbfb

  }

  .sc-hOqqkJ.sc-dacFzL.sc-jUEnpm.bIwaWQ.lkVWdA.gTpFSF .sc-gsTCUz.fgiAxh, .sc-dUrnRO.eqniXP svg {
    color: #04bbfb;
  }

  .sokuSwap__container {
    height: 100px;
    width: 100%;
  }


  // LP '+' icon
  .sc-eLgOdN.sc-bTvRPi.bIPIXS.ivrQBe svg {
    fill: #05489c;
  }

  #import-pool-link {
    color: #04bbfb;
  }


  div[color="text"], p[color="text"] {
    color: #05195a;
  }

  svg[stroke="#1FC7D4"], div[color='#1FC7D4'] {
    stroke: #04bbfb !important;
  }

  a[color="primary"] {
    color: #05195a
  }

  div[id="pair"] {
    white-space: nowrap;
  }

  .sc-gsTCUz.fgiAxh {
    color: #04bbfb;
  }

  // Settings - slippage tolerance buttons
  .sc-kHNMoK.iapHso button {
    color: #05489c;
    font-family: "Roboto Mono", monospace;

  }
  // slippage tolerance active button
  .slippage_input_boxes button:focus, .slippage_input_boxes button:active {
    background: #05489c;
    color: #fff !important;
    font-family: "Roboto Mono", monospace;
  }

  .sc-bBXqnf.lnPOAv::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red !important;
    opacity: 1; /* Firefox */
  }

  // slippage tolerance input boxes
  .slippage_input_boxes button {
    background: #d8d8d8;
    font-family: "Roboto Mono", monospace !important;
    color: #05489c !important;
  }

  .sc-bBXqnf.lnPOAv.focus-visible input:focus, .sc-bBXqnf.dRwyIT.focus-visible input:focus{
    border: none;
    outline: none !important;
  }

  ::-webkit-scrollbar-thumb {
    background: #05489c !important;
    border-radius: 8px;
}

// Liquidity Pool font colors.
  .sc-gsTCUz.fwbsDm, .sc-gsTCUz.kZvVkL, .sc-gsTCUz.gnxxQF {
  color: #05489c ;
}

// Exchange: Text above button
.sc-tYoTV.kRwMwX .sc-hOqqkJ.sc-dacFzL.sc-jUEnpm.drKBTM.hZLFGM.gTpFSF .sc-gsTCUz.jcQTaw {
  color: #04bbfb
}


// Settings Input Box Shadow
.modal_input_box:focus:not(:disabled), .modal_input_box:focus:not(:disabled), .modal_input_box:focus:not(:disabled) {
  box-shadow: 0px 0px 4px 2px #04bbfb;
}



// Error colors {
  .sc-gKsewC.cRNDUn {
    background: #04bbfb;
  }

  .sc-gsTCUz.TrMyr, .sc-gsTCUz.kpCMvp {
    color: #05489c
  }

  // Supply button
  .sc-kIeTtH.betTyM .sc-dlfnbm.cyBbRA, #swap-button, #confirm-swap-or-send {
    background-color: #04bbfb;
    box-shadow: none;
  }

  .sc-dlfnbm.cyBbRA {
    box-shadow: none;
  }

  .sc-gsTCUz.evkjzG {
    color: #05489c
  }

  // Create Pool and Supply button
  .sc-dlfnbm.gEyuyM {
    background-color: #04bbfb;
    box-shadow: none;
  }

  svg[viewBox="0 0 24 24"][stroke-linejoin="round"][stroke="currentColor"] {
    stroke: #04bbfb !important;
  }

  // Invalid Buttons
  .sc-dlfnbm.cyBbRA.pancake-button--disabled {
    background-color: #E9EAEB !important;
    color: #BDC2C4
  }

  .sc-dlfnbm.cyBbRA {
    z-index: 99 !important;
  }

  .sc-dwqbIM.brRjxf {
    z-index: -1;
    padding: 0;
  }

  // Insufficient Liquidity
  .sc-gsTCUz.iNaGNg {
    color: #BDC2C4;
    font-weight: 600;
  }

  .sc-tYoTV.sc-eHfQar.hmfdTm.enFmqQ {
    background-color: #E9EAEB !important;

  }

  div[color="#452A7A"] {
    color: #04bbfb;
  }

  // View on BscScan / Lp Tokens

  .sc-gsTCUz.sc-bYEvPH.jukfzI.bAxdNz, .sc-bXDlPE.cffivz, .sc-gsTCUz.EmPHT, .sc-gsTCUz.coDfVO  {
    color: #04bbfb;
  }

  .sc-gsTCUz.sc-bYEvPH.jukfzI.bAxdNz svg {
    fill: #04bbfb;

  }

  .sc-hOqqkJ.sc-dacFzL.sc-fvhGYg.sc-ctaXAZ.drKBTM.hZLFGM.bAKfeB.iISDyH svg,
  .sc-hOqqkJ.sc-dacFzL.sc-fbNXWD.drKBTM.hZLFGM.fGJHEj svg, .sc-jifIRw.fgkCuV svg
  {
    stroke: #05489c;
  }

  .sc-eLgOdN.sc-bTvRPi.sc-jGVbCA.bIPIXS.ivrQBe.jyaxuj svg {
    stroke: #fff;
  }

  // Liquidity Pool
  .sc-gsTCUz.fgiAxh {
    color: #05489c;
  }

  // Swap 
  .sc-gsTCUz.eHgAlQ {
    color: #04bbfb;

  }

  .sc-gsTCUz.sc-DJfgX.fgiAxh.iFbJSM span {
    color: #04bbfb;
  }
  

  // Loading circle

  .loader {
    color: #04bbfb !important;
    fill: #04bbfb !important;
    stroke: #04bbfb !important;
  }

  .sc-dlfnbm.bkDtuE.pancake-button--disabled {
    background: #d8d8d8 !important;
  }

  // Currency amount colors 
  .sc-hOqqkJ.sc-dacFzL.sc-fbNXWD.drKBTM.hZLFGM.fGJHEj .sc-gsTCUz.sc-iGctRS.fgiAxh.kBNPMv {
    color: #04bbfb;
  }

  // Liquidity provider text 
  .sc-hYAvag.eUpGRN .sc-kIeTtH.betTyM div[color='text']  {
    color: #04bbfb !important;
}

// LP Popup Box
.sc-gInsOo.kWlxBk svg {
  stroke: #04bbfb;
  fill: #04bbfb;
  color: #04bbfb;
}

.sc-dlfnbm.fonFih {
  background: #04bbfb;
  border: none;
}

.pancake-button--disabled {
  background: #E9EAEB !important;
}

.sc-dlfnbm.iLsstz.pancake-button--disabled, .pancake-button--disabled {
  color: #BDC2C4 !important
}

// Remove liquidity
.sc-gsTCUz.cSrbEE {
  color: #05489c;
}


svg[stroke='currentColor'], svg[stroke='#8f80ba'] {
  stroke: #05195a !important;
  border: none;
}

.sc-dlfnbm.dliDRb.sc-hKgILt.hFmlgK svg {
  color: #04bbfb;
  fill: #04bbfb;
}

div[color='textSubtle'] {
  color: #05489c;
}

.sc-iWFSnp.gCPHPd.inputPanel {
  padding: 3px 0;
}

svg[color="primary"] {
  color: #04bbfb;
  fill: #04bbfb;
}

*:focus {
  outline: 0;
}

`

export default GlobalStyle
