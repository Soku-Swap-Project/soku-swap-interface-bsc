/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Card as BootstrapCard } from 'react-bootstrap'

import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat'

import { Line } from 'react-chartjs-2'

import './TokenChart.css'

function TokenChart(props) {
  const [token, setToken] = useState('')

  const outputTokenSymbol = props?.token_to?.tokenInfo?.symbol
  //   const outputTokenLogo = props?.token_to?.tokenInfo?.logoURI

  console.log('token output', outputTokenSymbol)
  //   console.log('token logo', outputTokenLogo)

  const getToken = async () => {
    await require('axios')
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=46541fab931ca6010816ff37dd6b0e738929e5ab&ids=${outputTokenSymbol}&interval=30d,365d,1d,1h&convert=USD&per-page=100&page=1`
      )
      .then((response) => {
        if (response) {
          setToken(response)
          console.log('response', response)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const price_indicator = {
    good: 'green',
    bad: 'red',
    neutral: '#04bbfb',
  }

  //   const date = new Date()
  //   console.log(date.getFullYear())

  const labels = ['24 Hours Ago', '1 Hour Ago', 'Now']
  const token_price = token ? parseFloat(token?.data[0]?.price) : 0
  const token_price_1hr_diff = token_price ? parseFloat(token?.data[0]['1h']?.price_change) : 0
  //   console.log(token_price_1hr_diff)
  const token_price_24hr_diff = token_price ? parseFloat(token?.data[0]['1d']?.price_change) : 0
  const token_price_30d_diff = token_price ? token?.data[0]['30d'] : 0

  console.log(token_price_30d_diff)

  console.log('price test', token_price)
  console.log('1hr price test', token_price_1hr_diff)
  console.log('24hr price test', token_price_24hr_diff)
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Daily Token History',
        backgroundColor: '#04bbfb',
        borderColor: '#04bbfb',
        data: [
          token_price.toFixed(12) - token_price_24hr_diff.toFixed(12),
          token_price.toFixed(12) - token_price_1hr_diff.toFixed(12),
          token_price.toFixed(12),
        ],
      },
    ],
  }

  useEffect(() => {
    getToken()
  }, [outputTokenSymbol])

  //   If the token is listed in the API, show the chart.
  return outputTokenSymbol ? (
    <div className="token_full_chart">
      <div className="token_name_price" style={{ padding: '20px' }}>
        <div className="token_logo">
          <div className="token_name">
            <h1 style={{ color: '#000' }}>{token ? token?.data[0]?.name : 'N/A'}</h1>
            <h2 style={{ paddingTop: '10px' }}>{token ? token?.data[0]?.symbol : 'N/A'}/USD</h2>
          </div>
          <img src={`${token ? token?.data[0]?.logo_url : 'N/A'}`} alt="" srcset="" />
        </div>
        {/* If the current token price is more than it was 24 hours ago, show green. 
        If the current price is less, show red. Show gray if it's the same.*/}
        {token?.data[0]?.price > token?.data[0]?.price - token_price_24hr_diff ? (
          <div className="token_price" style={{ color: `${price_indicator.good}`, fontSize: '20px' }}>
            <TrendingUpIcon />
            <h2>${token ? token?.data[0]?.price : 'N/A'}</h2>
          </div>
        ) : token?.data[0]?.price < token?.data[0]?.price - token_price_24hr_diff ? (
          <div className="token_price" style={{ color: `${price_indicator.bad}`, fontSize: '20px' }}>
            <TrendingDownIcon />
            <h2>${token ? token?.data[0]?.price : 'N/A'}</h2>
          </div>
        ) : (
          <div className="token_price" style={{ color: `${price_indicator.neutral}`, fontSize: '20px' }}>
            <TrendingFlatIcon />
            <h2>${token ? token?.data[0]?.price : 'N/A'}</h2>
          </div>
        )}
      </div>
      <div className="token_graph" style={{ padding: '0px 20px' }}>
        <Line data={data} width={100} height={200} options={{ maintainAspectRatio: false }} />
      </div>
      <div className="token_info" style={{ padding: '20px' }}>
        Token Info
      </div>
    </div>
  ) : (
    <span></span>
  )
}

export default TokenChart
