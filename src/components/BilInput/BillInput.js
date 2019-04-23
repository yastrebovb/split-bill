import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBill, deleteBill, clearBill } from '../../actions/split'
import styled from 'styled-components'
import { DeleteIcon } from '../../styles/icons/'

const BillInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const BillInputKey = styled.div`
  position: relative;
  width: 25%;
  margin: 12px;
  color: #4e4e4e;
  font-weight: 700;
  text-align: center;
  transition: all 0.1s linear;
  user-select: none;
  cursor: pointer;

  &:active {
    transform: scale(1.2);
  }
`

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
      <BillInputWrapper>
        {this.state.keys.map(key => (
          <BillInputKey key={key} onClick={() => this.handleKey(key)}>
            {key === 'delete' ? <DeleteIcon /> : key}
          </BillInputKey>
        ))}
      </BillInputWrapper>
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
