import React from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { Persons } from './style'

const PersonsList = ({ persons }) => (
  <Persons>
    {persons.map(person => (
      <Person id={person.id} amount={person.amount} />
    ))}
  </Persons>
)

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonsList)
