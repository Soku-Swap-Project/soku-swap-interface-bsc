import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 462px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  padding: 1rem;
  margin-top: 1rem;
`

export const Tabs = styled.div`
  display: flex;
  .tabItem {
    border-radius: 12px;
    margin-right: 5px;
    padding: 8px 12px;
    color: ${({ theme }) => theme.colors.textDisabled};
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`

export const TabContent = styled.div`
  margin-top: 10px;
`

export const Transaction = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.binance};
  padding: 8px 12px;
  margin-bottom: 12px;
  display: flex;
  position: relative;
  justify-content: space-between;
  .txInfo {
    flex: 1;
    font-size: 10px;
    display: flex;
    p {
      margin: 0 0 5px 0;
      display: flex;
      align-items: center;
      .token {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
        color: ${({ theme }) => theme.colors.text};
        font-weight: 500;
        height: 32px;
        padding: 0 8px;
        margin: 0 12px;
      }
      small {
        color: ${({ theme }) => theme.colors.text};
      }
      &:last-child {
        margin: 0;
      }
    }
  }
  .txTime{
    margin-top: 10px; 
    font-size: 12px;
  }
  .action {
    flex: 0 0 100px;
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 4px 4px;
    button {
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      border-radius: 12px;
      padding: 0.5rem;
      font-size: 0.60rem;
      color: white;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }
  }
`
