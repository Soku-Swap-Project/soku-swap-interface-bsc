import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'
import { connectorLocalStorageKey } from '@pancakeswap-libs/uikit'

import Modal from '@material-ui/core/Modal'
import { getBscScanLink } from '../../utils'
import { useActiveWeb3React } from '../../hooks'

import './AccountModal.css'

/* eslint-disable */

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function AccountModal() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  let { account } = useWeb3React()
  const web3 = useWeb3React()
  const { login, logout } = useAuth()
  const { chainId } = useActiveWeb3React()
  const truncatedFirstHalf = account?.substring(0, 5)
  const truncatedLastHalf = account?.substring(account.length - 5, account.length)
  const truncatedAddress = `${truncatedFirstHalf}...${truncatedLastHalf}`

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // const date = new Date()
  // const month = date.getMonth() + 1
  // const day = date.getDate() + 7
  // const year = date.getFullYear()

  // const earnedAmount = 50

  const logoutAccount = () => {
    return logout
  }

  const body = (
    <div className={`account__modal ${classes.paper}`}>
      <div className="account__modal_header">
        <h1>Account Details</h1>
        <span onClick={handleClose} class="material-icons">
          close
        </span>
      </div>
      <hr />
      <div className="account__modal_details">
        <div className="wallet_info">
          <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Wallet: {truncatedAddress}</p>
          <img
            className="nav_logo"
            alt="Logo"
            src="/images/Web-Corner-Logo.png"
            style={{ height: '20px', marginLeft: '5px' }}
          />
        </div>

        <a target="_blank" className="view_on_scan" href={getBscScanLink(chainId, account, 'address')}>
          <h2>View on BscScan</h2>
          <span className="material-icons ">open_in_new</span>
        </a>
        <button className="account_logout" onClick={logoutAccount()}>
          <h2>Log Out</h2>
          <span className="material-icons ">logout</span>
        </button>
      </div>
    </div>
  )

  return (
    <>
      <li type="button" className="account" onClick={handleOpen}>
        Account: {truncatedAddress}
      </li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="account__modalContainer"
      >
        {body}
      </Modal>
    </>
  )
}
