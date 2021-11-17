import React from 'react'
import CardNav from 'components/CardNav'
import { Button } from 'react-bootstrap'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Link } from 'react-router-dom'

/* eslint-disable react/jsx-filename-extension */

import './Maintenance.css'

function Maintenance() {
  return (
    <div
      style={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div style={{ padding: '20px' }}>
        <CardNav />
        <h1 style={{ color: '#fff', opacity: '0.95', fontSize: '20px', fontWeight: '900', paddingBottom: '50px' }}>
          Undergoing maintenance to deliver the best experience to our users on Ethereum Mainnet.
        </h1>
        <Button className="maintenance-button" as={Link} to="/swap">
          Trade on Binance Smart Chain
        </Button>
      </div>
    </div>
  )
}

export default Maintenance
