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
        this.props.dispatch(deleteBill())
        break
      default:
        this.props.dispatch(editBill(keyValue))
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

export default connect()(BillInput)
