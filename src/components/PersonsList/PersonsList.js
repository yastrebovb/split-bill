import React, { Component } from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'

class PersonsList extends Component {
  render() {
    return (
      <div>
        {this.props.persons.map(person => (
          <Person amount={person.amount} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonsList)
