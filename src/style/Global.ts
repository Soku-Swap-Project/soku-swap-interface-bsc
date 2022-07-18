import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif;

  }

  .p-3 {
    padding: 1rem;
  }

  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .start_and_endBlocks:hover {
    opacity: 0.7;
  }

  .start_and_endBlocks {
    font-size: 14px;
    margin-right: -2px;
  }
 
  // body {
  //   min-height: 100vh;
  //   padding-bottom: 100px;    
  //   background: linear-gradient(250deg, #05195a 20%, #040f31);


  //   img {
  //     height: auto;
  //     max-width: 100%;
  //   }
  // }

  html,
  body {
    font-family:'Poppins', 'sans-serif';
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e0e6f0;
    color: #05195a;
  }

  body {
    position: relative;
    margin: 0;
    min-height: 100vh;

    img {
      height: auto;
      max-width: 100%;
    }
  }

  [data-reach-dialog-content] {
    background: transparent !important;
  }

  .logo_shadow {
    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));
  }

  .sokuswap__toggleContainer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin-top: -5px;
  padding-bottom: 5px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 20px;
}

.sokuswap__toggleContainer p {
  padding: 0px 20px;
  color: #fff;
  font-size: 14px;
  font-weight: bolder;
  margin-bottom: 8px;
}

.toggleActive {
  text-shadow: 0px 0px 20px #04bbfb, 1px 1px 10px #04bbfb;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 58px;
  height: 20px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 18px;
  width: 18px;
  left: 7px;
  bottom: 1px;
  background-color: #04bbfb;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #fff;
}

input:focus + .slider {
  -webkit-box-shadow: 0 0 1px #2196f3;
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

  .transak_modal {
    width: 95% !important;
  }

  svg[color="primary"] {
    color: #04bbfb;
    fill: #04bbfb;
  }


  svg[color="textSubtle"] {
    fill: #04bbfb;
    width: 18px;

  }

//   input[pattern='^[0-9]*[.,]?[0-9]*$']:focus:not(:disabled) {
//     box-shadow: 0px 0px 4px 2px #04bbfb
// }

input[pattern='^[0-9]*[.,]?[0-9]*$']::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #05195a;
  opacity: 1; /* Firefox */
}

input[pattern='^[0-9]*[.,]?[0-9]*$']:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #05195a;
}

input[pattern='^[0-9]*[.,]?[0-9]*$']::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #05195a;
}

input[pattern='^[0-9]*[.,]?[0-9]*$'] {
  color: #05195a;
}


  #import-pool-link {
    color: #04bbfb;
  }

  div[color="#452A7A"] {
    color: #04bbfb;
  }

  svg[stroke="#8f80ba"] {
    stroke: #05195a;
    border: none;
  }

  

  div[color="text"], p[color="text"] {
    color: #05195a;
  }

  svg[stroke="#1FC7D4"] {
    stroke: #04bbfb;
  }

  .finished_ribbon {
    background: #05489c;
    color: #fff;
  }

  .finished_ribbon::before, .finished_ribbon::after {
    background: #05489c;

  }

  .MuiChip-label.MuiChip-labelMedium.css-6od3lo-MuiChip-label {
    color: #05195a;
  }

  div[data-popper-reference-hidden="false"] {
    background: rgb(236, 241, 248);
      box-shadow: 12px 24px 12px 3px rgb(0 0 0 / 18%) !important;

    color: #04bbfb;
  }

   div[data-popper-reference-hidden="false"] div::before {
     background: rgb(236, 241, 248);
   }
 
  a[variant="primary"] {
    background: transparent;
    color: #05195a;
  }

  a[color="primary"] {
    color: #05195a
  }

  div[id="pair"] {
    white-space: nowrap;
  }

  input[placeholder="Search by name, symbol, address"]:focus:not(:disabled) {
    box-shadow: none;
  }

  input[placeholder="Search by name, symbol, address"]::placeholder {
    color: #c9c9c9;
  }

  .add_remove_liquidity {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 600px) {
    .add_remove_liquidity {
      width: 100%;
      flex-direction: column;
    }

    .farm_liquidity_buttons.add {
      margin-bottom: 16px;
    }

  }

  .farm_liquidity_buttons {
    background: #05195a;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 14px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    margin: 0 7px;
  }

  .farm_liquidity_buttons:hover {
    opacity: 0.85;
    transition: opacity 0.2s
  }

  
  *:focus {
    outline: 0;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

/* 'x' and Wallet names on Connect to a Wallet */
button[id='wallet-connect-metamask'] div,
button[id='wallet-connect-walletconnect'] div,
button[id='wallet-connect-binance chain wallet'] div,
.fKQcGp {
  color: #04bbfb !important;
  fill: #04bbfb !important;
}

a[href='https://docs.pancakeswap.finance/help/faq#how-do-i-connect-my-wallet-to-pancakeswap'] {
  display: none !important;
}

/* button[id='wallet-connect-trustwallet'],
button[id='wallet-connect-mathwallet'],
button[id='wallet-connect-tokenpocket'],
button[id='wallet-connect-walletconnect'],
button[id='wallet-connect-binance chain wallet'],
button[id='wallet-connect-safepal wallet'],
  display: none;
} */

button[id='wallet-connect-tokenpocket'],
button[id='wallet-connect-trustwallet'],
button[id='wallet-connect-mathwallet'],
button[id='wallet-connect-tokenpocket'],
button[id='wallet-connect-safepal wallet'] {
  display: none;
}

img[alt="icon"] {
  object-fit: contain !important;
}
  
  a[href="https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain"] {
    display: none;
  }

  // Tooltip
  div[data-popper-reference-hidden="false"][data-popper-escaped="false"][data-popper-placement="top-end"] {
    background: #fff;
    color: #04bbfb
  }

  div[data-popper-reference-hidden="false"][data-popper-escaped="false"][data-popper-placement="top-end"] div::before {
    background: #fff;
  }
  
  div[role='presentation'] {
    background: rgba(0, 0, 0, 0.5);
  }
  
  h2[color='text'] {
    color: #05195a;
    font-family: 'Poppins', 'sans';
  }
  
  svg[color='primary'] {
    color: #04bbfb;
    fill: #04bbfb;
  }
  
  // div[color='textSubtle'] {
  //   color: #05489c;
  // }

  div[color='textSubtle'] {
    color: rgb(127 127 127);
}
  
  svg[stroke='#8f80ba'] {
    stroke: #05195a;
    border: none;
  }

  .Toastify__toast-container--top-right {
    top: 5.25em;
    width: 425px;
  }

  @media only screen and (max-width: 480px) {
  .Toastify__toast-container--top-right {
    display: flex;
    justify-content: center;
  }

  .Toastify__toast {
    width: 350px;
    background: transparent;
  }

  .how_to_remove_liquidity {
    padding-top: 16px !important;
    padding-bottom: 0px;
  }
}

.how_to_remove_liquidity {
  padding-top: 0px;
  padding-bottom: 16px;
}

button {
  border-radius: 14px;
}

  
  .pancake-button--disabled {
    background-color: #d8d8d8 !important;
    color: gray !important;
    // border: 2px solid lightgray !important
  }

  // .enter-done svg {
  //   fill: #04bbfb;
  // }

`

export default GlobalStyle
