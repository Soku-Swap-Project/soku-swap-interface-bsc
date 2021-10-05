import React, { useState } from 'react'
import styled from 'styled-components'

/* eslint-disable */

// console.log(window.location)

const origin = window.location.origin

const Toggle = () => {
  var defaultCheckedValue = ''
  // change default check value to be displayed in check box depending on current window location 
  if (window.location.href == `${origin}/ethereum/#/swap`) {
    defaultCheckedValue = false
  } else if (window.location.href == `${origin}/bsc/#/swap`) {
    defaultCheckedValue = !false
  } else if (window.location.href == `${origin}/bsc/#/limit-order`){
    defaultCheckedValue = !false
  }

  // If checked, add active class to either ETH or BSC

  const checkbox = document.getElementById('checkbox')
  const ethToggle = document.querySelector('.ethToggle')
  const bscToggle = document.querySelector('.bscToggle')

/*    if (ethToggle?.classList == ' toggleActive') {
    ethToggle?.classList.remove('toggleActive')
  }  */

  checkbox?.addEventListener('change', function () {
    // Check if toggle switch is on ETH, if eth change window to bsc 
    if (window.location.href = `${origin}/ethereum/#/swap`) {
      window.location.href = `${origin}/bsc/#/swap`
      // console.log('Show BSC Swap')
      for (let i = 0; i < bscToggle?.classList.length; i++) {
        if (bscToggle.classList[i] == 'toggleActive') {
          return
        } else {
          if (ethToggle != null && bscToggle != null) {
            bscToggle.className = 'form-check-label bscToggle'
            ethToggle.className = 'form-check-label ethToggle'
          }
        }
      }
    }
    // Check if toggle switch is on bsc, if bsc change window to eth 
    else if (window.location.href = `${origin}/bsc/#/swap`) {
      window.location.href = `${origin}/ethereum/#/swap`
      // console.log('Show ETH Swap')
      for (let i = 0; i < ethToggle?.classList.length; i++) {
        if (ethToggle.classList[i] == 'toggleActive') {
          return
        } else {
          if (ethToggle != null && bscToggle != null) {
            ethToggle.className = 'form-check-label ethToggle '
            bscToggle.className = 'form-check-label bscToggle'
          }
        }
      }
    } else if (window.location.href == `${origin}/bsc/#/limit-order`){
      for (let i = 0; i < ethToggle?.classList.length; i++) {
        if (bscToggle.classList[i] == 'toggleActive') {
          return
        } else {
          if (ethToggle != null && bscToggle != null) {
            ethToggle.className = 'form-check-label ethToggle'
            bscToggle.className = 'form-check-label bscToggle '
          }
        }
      }
    }
  })

  return (
    <div className="sokuswap__toggleContainer">
      <p className="form-check-label ethToggle">ETH</p>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" defaultChecked={defaultCheckedValue} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <p className="form-check-label bscToggle">BSC</p>
    </div>
  )
}

const CheckBoxWrapper = styled.div`
  position: relative;
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 25px;
  border-radius: 15px;
  background: #ebebeb;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #04bbfb;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 40px;
  height: 25px;
  &:checked + ${CheckBoxLabel} {
    background: #fff;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`

export default Toggle
