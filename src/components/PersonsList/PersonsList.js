import React from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { Persons } from './style'

const PersonsList = ({ persons }) => (
  <Persons>
    {persons.map(({ id, amount }) => (
      <Person id={id} key={id} amount={amount} />
    ))}
  </Persons>
)

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonsList)
