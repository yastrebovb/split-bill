import React, { Component } from 'react'
import PersonsList from '../../components/PersonsList/PersonsList'
import styled from 'styled-components'

const ResultPageWrap = styled.div`
  width: 96%;
  height: 315px;
  margin: 0 auto;
`

export default class ResultPage extends Component {
  render() {
    return (
      <ResultPageWrap>
        <PersonsList />
      </ResultPageWrap>
    )
  }
}
