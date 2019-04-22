import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTips } from '../../actions/split'
import styled from 'styled-components'
import { CheckMark } from '../../styles/icons/'

const Tips = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 24px;
`

const Tip = styled.div`
  position: relative;
  width: 18%;
  padding: 7px 4px;
  text-align: center;
  color: #747d8c;
  border: 1.5px solid;
  border-color: ${props =>
    props.status === 'selected' ? '#2ecc71' : '#d1d8e0'}
  border-radius: 4px;
  transition: all .2s linear;
  cursor: pointer;
`

class TipsInput extends Component {
  state = {
    tipsValues: [0, 10, 20, 30],
    currentTip: 0
  }

  handleTipClick = tipValue => {
    this.props.editTips(tipValue)

    this.setState({
      currentTip: tipValue
    })
  }

  render() {
    return (
      <Tips>
        {this.state.tipsValues.map((value, index) => (
          <Tip
            status={
              value === this.state.currentTip ? 'selected' : 'not-selected'
            }
            key={index}
            onClick={this.handleTipClick.bind(this, value)}
          >
            {value}%{value === this.state.currentTip && <CheckMark />}
          </Tip>
        ))}
      </Tips>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTips: tipValue => {
      dispatch(editTips(tipValue))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TipsInput)
