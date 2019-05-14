import React from 'react'
import { connect } from 'react-redux'
import {
  TotalBarWrapper,
  TotalBarTotal,
  TotalBarFields,
  TotalBarField,
  Text
} from './style'

export const TotalBar = ({
  split: { total, bill, friends, tipsPercentage, tipsAmount }
}) => (
  <TotalBarWrapper>
    <TotalBarTotal>
      <Text medium>Total</Text>
      <Text big>${total}</Text>
    </TotalBarTotal>

    <TotalBarFields>
      <TotalBarField>
        <Text small>Bill</Text>
        <Text small>${bill}</Text>
      </TotalBarField>
      <TotalBarField>
        <Text small>Friends</Text>
        <Text small>{friends}</Text>
      </TotalBarField>
      <TotalBarField>
        <Text small>Tips({tipsPercentage}%)</Text>
        <Text small>${tipsAmount}</Text>
      </TotalBarField>
    </TotalBarFields>
  </TotalBarWrapper>
)

const mapStateToProps = state => {
  return {
    split: state.split
  }
}

export default connect(mapStateToProps)(TotalBar)
