import React from 'react'
import styled from 'styled-components'

const PersonStyled = styled.div`
  height: ${props => (props.height ? props.height + 'px' : '100px')};
  background: grey;
  border: 1px solid black;
`

const Person = ({ amount }) => {
  return <PersonStyled height={100 / amount}>{amount}</PersonStyled>
}

export default Person
