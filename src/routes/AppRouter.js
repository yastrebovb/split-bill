import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SwitchLink from '../components/SwitchLink/SwitchLink'
import EditPage from '../pages/EditPage/EditPage'
import ResultPage from '../pages/ResultPage/ResultPage'
import TotalBar from '../components/TotalBar/TotalBar'
import { GlobalStyle, App } from '../styles/global'
import 'normalize.css'

const AppRouter = () => (
  <BrowserRouter>
    <App>
      <TotalBar />
      <Switch>
        <Route path="/" component={EditPage} exact={true} />
        <Route path="/result" component={ResultPage} />
      </Switch>
      <SwitchLink />
      <GlobalStyle />
    </App>
  </BrowserRouter>
)

export default AppRouter
