/* eslint-disable */

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CloseIcon from '@mui/icons-material/Close'
import { useWeb3React } from '@web3-react/core'
import useAuth from 'hooks/useAuth'

import Modal from '@material-ui/core/Modal'

// import './ClaimSoku.css'

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

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const isMobile = window.innerWidth <= 1200

  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate() + 7
  const year = date.getFullYear()

  const earnedAmount = 50

  const body = (
    <div className="flex flex-col gap-6 network_modal">
      <div className="modal_header">
        <h1 className="text-blue font-bold" style={{ fontWeight: 700 }}>
          Claim SOKU
        </h1>
        <CloseIcon
          className="hover_shadow_icon"
          style={{ color: '#05195a', cursor: 'pointer' }}
          onClick={handleClose}
        />
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
          <p id="simple-modal-description">No rewards at this time.</p>
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
          <p id="simple-modal-description">Please connect your wallet to view your rewards.</p>
        </div>
      )}
    </div>
  )

  return (
    <div className="claimSoku__wrapper">
      <button
        type="button"
        className={isMobile ? 'claimSoku__navButton_mobile' : 'claimSoku__navButton' + ' hover_shadow'}
        style={{ background: '#05195a', padding: '12px 24px', whiteSpace: 'nowrap', fontWeight: 700 }}
        onClick={handleOpen}
      >
        Claim Soku
      </button>
      {/* <a href="https://tokensale.sokuswap.finance/token-exchange/#/" target="_blank">
        <button type="button" className="claimSoku__navButton">
          Claim Soku
        </button>
      </a> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className="network_modal_container"
        role="none"
      >
        {body}
      </Modal>
    </div>
  )
}
