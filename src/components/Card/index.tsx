import styled from 'styled-components'

import './Card.css'

const Card = styled.div<any>`
  width: 100%;
  border-radius: 32px;
  padding: 0.1rem;
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
`
export default Card

export const LightCard = styled(Card)`
  border: 1px solid ${({ theme }) => theme.colors.invertedContrast};
  background-color: ${({ theme }) => theme.colors.invertedContrast};
`

export const GreyCard = styled(Card)`
  background-color: #e9eaeb;
`
