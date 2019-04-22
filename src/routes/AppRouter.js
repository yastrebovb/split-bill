import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import TotalBar from '../components/TotalBar/TotalBar'
import EditPage from '../containers/EditPage/EditPage'
import ResultPage from '../containers/ResultPage/ResultPage'
import styled, { createGlobalStyle } from 'styled-components'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

const App = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 20px 12px;
  box-shadow: 3px 4px 25px -15px rgba(179, 179, 179, 1);
  border-radius: 10px;
`

const AppRouter = () => (
  <BrowserRouter>
    <App>
      <TotalBar />
      <Switch>
        <Route path="/" component={EditPage} exact={true} />
        <Route path="/result" component={ResultPage} />
      </Switch>
      <Link to="/result">SPLIT BILL</Link>
      <GlobalStyle />
    </App>
  </BrowserRouter>
)

export default AppRouter
