import React, { Component } from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Persons = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 322px;
`

class PersonsList extends Component {
  render() {
    return (
      <Persons>
        {this.props.persons.map(person => (
          <Person amount={person.amount} />
        ))}
      </Persons>
    )
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonsList)
