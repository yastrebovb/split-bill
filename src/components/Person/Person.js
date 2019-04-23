import React from 'react'
import styled from 'styled-components'

const PersonStyled = styled.div`
  flex: 1 1 0;
  border-bottom: 2px solid rgba(209, 216, 224, 0.41);
`

const Person = props => <PersonStyled>{props.amount}</PersonStyled>

export default Person
