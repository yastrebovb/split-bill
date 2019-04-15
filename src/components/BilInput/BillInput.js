import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBill, deleteBill } from '../../actions/split'

class BillInput extends Component {
  state = {
    adding: false,
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', 'delete']
  }

  handleKey = keyValue => {
    switch (keyValue) {
      case '+':
        break
      case 'delete':
        this.props.dispatch(deleteBill())
        break
      default:
        this.props.dispatch(editBill(keyValue))
        break
    }
  }

  render() {
    return (
      <div>
        {this.state.keys.map(key => (
          <div key={key} onClick={this.handleKey.bind(this, key)}>
            {key}
          </div>
        ))}
      </div>
    )
  }
}

export default connect()(BillInput)
