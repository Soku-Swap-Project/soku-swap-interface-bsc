import React, { ReactNode } from 'react'
import styled from 'styled-components'
import {useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import SettingsModal from './SettingsModal'
import RecentTransactionsModal from './RecentTransactionsModal'

import './header.css'

interface PageHeaderProps {
  title: ReactNode
  // description?: ReactNode
  // children?: ReactNode
}

// const HistoryIcon = () => (
//   <Svg width="24" height="24" viewBox="0 0 24 24">
//     <path
//       d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"
//       fill="currentColor"
//     />
//   </Svg>
// )

const StyledPageHeader = styled.div`
  padding: 10px;
  margin-bottom: -30px;
`

// const Details = styled.div`
//   flex: 1;
// `

const PageHeader = ({ title }: PageHeaderProps) => {
  const TranslateString = useI18n()
  const [onPresentSettings] = useModal(<SettingsModal translateString={TranslateString} />)
  const [onPresentRecentTransactions] = useModal(<RecentTransactionsModal translateString={TranslateString} />)

  return (
    <StyledPageHeader>
      <div className="sokuswap__heading">
        <h2>{title}</h2>
        <div className="settings_transactions">
          <button type="button" onClick={onPresentSettings}>
            <span className="material-icons">settings</span>
          </button>
          <button type="button" onClick={onPresentRecentTransactions}>
            <span className="material-icons">history</span>
          </button>
        </div>
      </div>
    </StyledPageHeader>

    // <StyledPageHeader>
    //   <Flex alignItems="center">
    //     <Details>
    //       <Heading mb="8px" color="#05195a">
    //         {title}
    //       </Heading>
    //       {description && (
    //         <Text color="#000" fontSize="14px">
    //           {description}
    //         </Text>
    //       )}
    //     </Details>
    //     <IconButton variant="text" onClick={onPresentSettings} title={TranslateString(1200, 'Settings')}>
    //       <CogIcon width="24px" color="currentColor" />
    //     </IconButton>
    //     <IconButton
    //       variant="text"
    //       onClick={onPresentRecentTransactions}
    //       title={TranslateString(1202, 'Recent transactions')}
    //     >
    //       <HistoryIcon />
    //     </IconButton>
    //   </Flex>
    //   {children && <Text mt="16px">{children}</Text>}
    // </StyledPageHeader>
  )
}

export default PageHeader
