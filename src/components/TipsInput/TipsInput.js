import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editTips } from '../../actions/split'

class TipsInput extends Component {
  state = {
    tipsValues: [0, 10, 20, 30],
    currentTip: 0
  }

  handleTipClick = tipValue => {
    this.props.dispatch(editTips(tipValue))

    this.setState({
      currentTip: tipValue
    })
  }

  render() {
    return (
      <div>
        {this.state.tipsValues.map((value, index) => (
          <div
            className={
              value === this.state.currentTip ? 'item item--active' : 'item'
            }
            key={index}
            onClick={this.handleTipClick.bind(this, value)}
          >
            {value}
          </div>
        ))}
      </div>
    )
  }
}

export default connect()(TipsInput)
