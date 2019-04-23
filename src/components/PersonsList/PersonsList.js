import React from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { Persons } from './style'

const PersonsList = ({ persons }) => (
  <Persons>
    {persons.map(({ personId, personAmount }) => (
      <Person id={personId} key={personId} amount={personAmount} />
    ))}
  </Persons>
)

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonsList)
