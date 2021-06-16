import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

import Modal from '@material-ui/core/Modal'

import './ClaimSoku.css'

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

export default function ClaimSokuModal() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const { account } = useWeb3React()
  const { login, logout } = useAuth()

  let [numofSwap, setNumOfSwap] = useState(0)

  if (account != undefined) {
    localStorage.setItem('address', account.toString())
  }

  const handleOpen = () => {
    setOpen(true)
    setNumOfSwap((numofSwap += 1))
    localStorage.setItem('userValue', parseInt(numofSwap))
  }

  const handleClose = () => {
    setOpen(false)
  }

  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate() + 7
  const year = date.getFullYear()

  const earnedAmount = 50
  console.log('NumOfSwap', numofSwap)
  console.log('localStorage', localStorage.getItem('userValue'))

  const body = (
    <div className={`claimSoku__modal ${classes.paper}`}>
      <div className="claimSoku__modal_header">
        <h1>Claim Soku</h1>
        <span onClick={handleClose} className="material-icons">
          close
        </span>
      </div>
      <hr />
      {account ? (
        <div>
          {/* <h2 id="simple-modal-title">Your Rewards:</h2>
          <br />
          <p id="simple-modal-description">
            Congratulations! You've earned <strong className="soku_rewarded">{earnedAmount} SOKU</strong> tokens this
            week.
          </p> */}
          <h2 id="simple-modal-title">Rewards:</h2>
          <br />
          <p id="simple-modal-description">
            No rewards at this time. Please check back on June 1st to convert your SSOKU to SOKU.
          </p>
        </div>
      ) : (
        <div className="claimSoku__noRewards">
          {/* <h2 id="simple-modal-title">No Rewards:</h2>
          <br />
          <p id="simple-modal-description">{`You do not qualify for rewards at this time. `}</p>
          <p id="simple-modal-description">{`Please check back on: ${month}/${day}/${year}`}</p>

          <p id="simple-modal-description">Click the link below to see how to get your rewards!</p>
          <br />
          <a href="#">Get Rewards</a> */}
          <h2 id="simple-modal-title">Rewards:</h2>
          <br />
          <p id="simple-modal-description">
            No rewards at this time. Please check back on June 1st to convert your SSOKU to SOKU.
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="claimSoku__wrapper">
      <button type="button" className="claimSoku__navButton" onClick={handleOpen}>
        Claim Soku
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="claimSoku__modalContainer"
      >
        {body}
      </Modal>
    </div>
  )
}
