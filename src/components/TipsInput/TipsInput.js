import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTips } from '../../actions/split'
import { Tips, Tip, CheckMarkAnimated } from './style'
import { CheckMark } from '../../styles/icons/'

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
            {value === this.state.currentTip && (
              <CheckMarkAnimated>
                <CheckMark />
              </CheckMarkAnimated>
            )}
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
