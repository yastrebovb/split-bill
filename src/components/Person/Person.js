import React from 'react'
import { PersonStyled, PersonId, PersonAmount } from './style'

const Person = ({ id, amount }) => (
  <PersonStyled>
    <PersonId>Person {String.fromCharCode(96 + id)}</PersonId>
    <PersonAmount>${amount}</PersonAmount>
  </PersonStyled>
)

export default Person
