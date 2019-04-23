import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBill, deleteBill, clearBill } from '../../actions/split'
import { Buttons, Button } from './style'
import { DeleteIcon } from '../../styles/icons/'

class BillInput extends Component {
  state = {
    buttons: ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'AC', '0', 'delete']
  }

  handleKey = btnValue => {
    btnValue === 'AC'
      ? this.props.clearBill()
      : btnValue === 'delete'
      ? this.props.deleteBill()
      : this.props.editBill(btnValue)
  }

  render() {
    const { buttons } = this.state

    return (
      <Buttons>
        {buttons.map(btn => (
          <Button value={btn} key={btn} onClick={() => this.handleKey(btn)}>
            {btn === 'delete' ? <DeleteIcon /> : btn}
          </Button>
        ))}
      </Buttons>
    )
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
  null,
  mapDispatchToProps
)(BillInput)
