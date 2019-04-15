import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routes/AppRouter'
import configureStore from './store/configureStore'
import { editFriends } from './actions/split'

const store = configureStore()

store.dispatch(editFriends(1))

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)
