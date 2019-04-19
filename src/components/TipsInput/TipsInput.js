import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTips } from '../../actions/split'
import styled from 'styled-components'

const Tips = styled.div`
  display: flex;
  justify-content: space-around;
`

const Tip = styled.div`
  width: 20%;
  padding: 10px 5px;
  text-align: center;
  border: 1px solid;
  border-color: ${props => (props.status === 'selected' ? '#2ecc71' : 'black')}
  border-radius: 4px;
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
            {value}%
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
