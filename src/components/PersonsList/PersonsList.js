import React, { Component } from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { addPerson, removePerson } from '../../actions/persons'

class PersonsList extends Component {
  componentWillMount() {
    for (let i = 0; i < this.props.friends; i++) {
      console.log(this.props.equalDivided)
      this.props.addPerson(this.props.equalDivided)
    }
  }

  render() {
    return (
      <div>
        {this.props.persons.map(person => (
          <Person amount={person.amount} key={person.id} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    total: state.split.total,
    friends: state.split.friends,
    equalDivided: (state.split.total / state.split.friends).toFixed(2),
    persons: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson: amount => {
      dispatch(addPerson(amount))
    },
    removePerson: id => {
      dispatch(removePerson(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList)
