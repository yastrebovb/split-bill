import React from 'react'
import styled from 'styled-components'

const Handle = styled.div`
  display: flex;
  justify-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 22px;
  height: 22px;
  padding: 2px;
  border: 1px solid #57606f;
  border-radius: 50%;
  background-color: white;
`

const Dot = styled.div`
  width: 3px;
  height: 3px;
  margin: 1px;
  border-radius: 50%;
  background-color: #57606f;
`

const PersonHandle = () => {
  return (
    <Handle>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Handle>
  )
}

export default PersonHandle
