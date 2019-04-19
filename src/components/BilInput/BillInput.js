import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBill, deleteBill } from '../../actions/split'
import styled from 'styled-components'

const BillInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const BillInputKey = styled.div`
  width: 25%;
  margin: 12px;
  text-align: center;
`

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
        this.props.deleteBill()
        break
      default:
        this.props.editBill(keyValue)
        break
    }
  }

  render() {
    return (
      <BillInputWrapper>
        {this.state.keys.map(key => (
          <BillInputKey key={key} onClick={this.handleKey.bind(this, key)}>
            {key}
          </BillInputKey>
        ))}
      </BillInputWrapper>
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
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(BillInput)
