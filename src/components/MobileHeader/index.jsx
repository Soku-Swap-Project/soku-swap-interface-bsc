/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './MobileHeader.css'

function MobileHeader({ page }) {
  return (
    <div className="sokuswap_heading">
      <h1>{page}</h1>
    </div>
  )
}

export default MobileHeader
