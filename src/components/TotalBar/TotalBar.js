import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const TotalBarWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  padding: 10px;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #ffffff;
  box-shadow: -4px 32px 24px -16px rgba(46, 204, 112, 0.17);
`

const TotalBarTotal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`

const TotalBarFields = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  max-width: 140px;
`

const TotalBarField = styled.div`
  display: flex;
  justify-content: space-between;
`

const Text = styled.p`
  margin: 6px;
  font-size: ${props => (props.big ? '28px' : props.medium ? '16px' : '14px')};
  font-weight: ${props => (props.bold ? '700' : '400')};
  text-transform: uppercase;
`

const TotalBar = props => {
  const { total, bill, friends, tipsPercentage, tipsAmount } = props.split

  return (
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
}

const mapStateToProps = state => {
  return {
    split: state.split
  }
}

export default connect(mapStateToProps)(TotalBar)
