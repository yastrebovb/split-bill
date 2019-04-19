import React, { Component } from 'react'
import Person from '../Person/Person'
import { connect } from 'react-redux'
import { addPerson, removePerson } from '../../actions/persons'
import { getLastPersonId, getDividedTotal } from '../../selectors/'

class PersonsList extends Component {
  render() {
    return <div />
  }
}

const mapStateToProps = state => {
  return {
    latestId: getLastPersonId(state),
    dividedTotal: getDividedTotal(state)
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
