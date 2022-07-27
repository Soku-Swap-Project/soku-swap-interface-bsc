import React from 'react'

export const ToastError = (title: any, description: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '10px',
    }}
  >
    <h1 style={{ fontWeight: 'bold', color: '#e74c3c' }}>{title}</h1>
    <p style={{ paddingTop: '20px' }}>{description}</p>
  </div>
)

export const ToastSuccess = (title: any, description: any) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '10px',
    }}
  >
    <h1 style={{ fontWeight: 'bold', color: '#07bc0c' }}>{title}</h1>
    <p style={{ paddingTop: '20px' }}>{description}</p>
  </div>
)
