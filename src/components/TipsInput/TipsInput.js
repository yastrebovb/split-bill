import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTips } from '../../actions/split'
import { Tips, Tip, CheckMarkAnimated } from './style'
import { CheckMark } from '../../styles/icons/'

export class TipsInput extends Component {
  state = {
    tipsPercentages: [0, 10, 20, 30],
    currentTip: 0
  }

  handleTipClick = tipValue => {
    this.setState({
      currentTip: tipValue
    })

    this.props.editTips(tipValue)
  }

  render() {
    const { tipsPercentages, currentTip } = this.state

    return (
      <Tips>
        {tipsPercentages.map(tip => (
          <Tip
            key={tip}
            status={tip === currentTip ? 'selected' : 'not-selected'}
            onClick={this.handleTipClick.bind(this, tip)}
          >
            {tip}%
            {tip === currentTip && (
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
