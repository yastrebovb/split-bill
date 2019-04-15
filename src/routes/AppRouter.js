import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import TotalBar from '../components/TotalBar/TotalBar'
import EditPage from '../containers/EditPage/EditPage'
import ResultPage from '../containers/ResultPage/ResultPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <TotalBar />
      <Switch>
        <Route path="/" component={EditPage} exact={true} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
