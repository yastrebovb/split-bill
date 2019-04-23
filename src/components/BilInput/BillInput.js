import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBill, deleteBill, clearBill } from '../../actions/split'
import { Buttons, Button } from './style'
import { DeleteIcon } from '../../styles/icons/'

class BillInput extends Component {
  state = {
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'AC', '0', 'delete']
  }

  handleKey = keyValue => {
    keyValue === 'AC'
      ? this.props.clearBill()
      : keyValue === 'delete'
      ? this.props.deleteBill()
      : this.props.editBill(keyValue)
  }

  render() {
    return (
      <Buttons>
        {this.state.keys.map(key => (
          <Button key={key} onClick={() => this.handleKey(key)}>
            {key === 'delete' ? <DeleteIcon /> : key}
          </Button>
        ))}
      </Buttons>
    )
  }
}

const mapStateToProps = state => {
  return {
    bill: state.split.bill
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editBill: keyValue => {
      dispatch(editBill(keyValue))
    },
    deleteBill: () => {
      dispatch(deleteBill())
    },
    clearBill: () => {
      dispatch(clearBill())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillInput)
