import React from 'react'
import { connect } from 'react-redux'

const TotalBar = props => {
  const { total, bill, friends, tips } = props.split

  return (
    <div className="total-bar">
      <div className="total-bar__total">
        <p className="total-bar__heading">Total</p>
        <p className="total-bar__total-value">${total}</p>
      </div>
      <div className="total-bar__fields">
        <div className="total-bar__field">
          <p className="total-bar__title">Bill</p>
          <p className="total-bar__value">${bill}</p>
        </div>
        <div className="total-bar__field">
          <p className="total-bar__title">Friends</p>
          <p className="total-bar__value">${friends}</p>
        </div>
        <div className="total-bar__field">
          <p className="total-bar__title">Tips({tips}%)</p>
          <p className="total-bar__value">${}</p>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    split: state.split
  }
}

export default connect(mapStateToProps)(TotalBar)
