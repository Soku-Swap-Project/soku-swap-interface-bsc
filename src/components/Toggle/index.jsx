import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

/* eslint-disable */

console.log(window.location)
const origin = window.location.origin

const Toggle = () => {
  const history = useHistory()

  // If checked, add active class to either ETH or BSC
  const checkbox = document.getElementById('checkbox')
  const ethToggle = document.querySelector('.ethToggle')
  const bscToggle = document.querySelector('.bscToggle')

  if (ethToggle?.classList == ' toggleActive') {
    ethToggle?.classList.remove('toggleActive')
  }

  checkbox?.addEventListener('change', function () {
    // Check if toggle switch is on BSC
    if (this.checked) {
      // window.location.href = `${origin}/bsc/#/swap`
      history.push('/')
      // console.log('Show BSC Swap')
      for (let i = 0; i < bscToggle?.classList.length; i++) {
        if (bscToggle.classList[i] == 'toggleActive') {
          return
        } else {
          if (ethToggle != null && bscToggle != null) {
            bscToggle.className = 'form-check-label bscToggle toggleActive'
            ethToggle.className = 'form-check-label ethToggle'
          }
        }
      }
    }
    // Check if toggle switch is on ETH
    else {
      // window.location.href = `${origin}/ethereum/#/swap`
      history.push('/maintenance')

      // console.log('Show ETH Swap')
      for (let i = 0; i < ethToggle?.classList.length; i++) {
        if (ethToggle.classList[i] == 'toggleActive') {
          return
        } else {
          if (ethToggle != null && bscToggle != null) {
            ethToggle.className = 'form-check-label ethToggle toggleActive'
            bscToggle.className = 'form-check-label bscToggle'
          }
        }
      }
    }
  })

  return (
    <div className="sokuswap__toggleContainer">
      <p className="form-check-label ethToggle">ETH</p>
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" defaultChecked={!false} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
      <p className="form-check-label bscToggle toggleActive">BSC</p>
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
