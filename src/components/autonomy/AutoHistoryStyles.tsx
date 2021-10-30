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
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    &.active {
      background-color: #04bbfb;
    }
  }
`

export const TabContent = styled.div`
  margin-top: 10px;
`

export const Transaction = styled.div`
  border-radius: 12px;
  background-color: #04bbfb;
  padding: 8px 12px;
  margin-bottom: 12px;

  .txInfo {
    font-size: 10px;
    padding: 0px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    p {
      display: flex;
      align-items: center;
      .token {
        display: flex;
        align-items: center;
        background-color: #fff;
        border-radius: 12px;
        box-shadow: rgb(0 0 0 / 8%) 0px 6px 10px;
        color: rgb(5, 25, 90);
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
  .txTime {
    // margin-top: 10px;
    font-size: 12px;
  }

  .limit_box_footer {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    width: auto;
    padding: 10px;
  }

  .action {
    // flex: 0 0 100px;
    // text-align: right;
    // position: absolute;
    // bottom: 0;
    // right: 0;
    // margin: 0 4px 4px;
    button {
      background: ${({ theme }) => theme.colors.contrast};
      border: none;
      border-radius: 12px;
      padding: 0.5rem;
      font-size: 0.6rem;
      color: white;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        opacity: 0.75;
      }
    }
  }
`
