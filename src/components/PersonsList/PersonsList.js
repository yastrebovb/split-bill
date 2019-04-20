import React, { Component } from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { addPerson, removePerson, deletePersons } from '../../actions/persons'
import {
  getPersonsQuantity,
  getLastPersonId,
  getDividedTotal
} from '../../selectors/'

class PersonsList extends Component {
  componentWillMount() {
    this.props.deletePersons()
    for (let i = 1; i <= this.props.friends; i++) {
      this.props.addPerson(i, this.props.dividedTotal)
    }
  }

  render() {
    return (
      <div>
        {this.props.friendsArr.map(item => (
          <Person amount={this.props.dividedTotal}>
            {this.props.dividedTotal}
          </Person>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friendsArr: state.persons,
    friends: getPersonsQuantity(state),
    latestId: getLastPersonId(state),
    dividedTotal: getDividedTotal(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPerson: (id, amount) => {
      dispatch(addPerson(id, amount))
    },
    removePerson: id => {
      dispatch(removePerson(id))
    },
    deletePersons: () => {
      dispatch(deletePersons())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonsList)
