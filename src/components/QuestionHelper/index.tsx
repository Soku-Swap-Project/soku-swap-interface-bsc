import React, { useCallback, useState } from 'react'
import { HelpCircle as Question } from 'react-feather'
import styled from 'styled-components'
import Tooltip from '../Tooltip'

const QuestionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  background: transparent;
  outline: none;
  cursor: default;
  border-radius: 36px;
  color: #04bbfb !important;

  :hover,
  :focus {
    opacity: 0.7;
    color: lighten(#04bbfb) !important;
  }
`

export default function QuestionHelper({ text }: { text: string }) {
  const [show, setShow] = useState<boolean>(false)

  const open = useCallback(() => setShow(true), [setShow])
  const close = useCallback(() => setShow(false), [setShow])

  return (
    <span style={{ marginLeft: 4 }}>
      <Tooltip text={text} show={show}>
        <QuestionWrapper className="hover_shadow_icon" onClick={open} onMouseEnter={open} onMouseLeave={close}>
          <Question size={16} />
        </QuestionWrapper>
      </Tooltip>
    </span>
  )
}
