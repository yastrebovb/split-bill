import React, { Component } from 'react'
import PersonsList from '../../components/PersonsList/PersonsList'

export default class ResultPage extends Component {
  render() {
    return (
      <div className="result-page">
        <PersonsList />
      </div>
    )
  }
}
