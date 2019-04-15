import { createStore, combineReducers } from 'redux'
import splitReducer from '../reducers/split'
import personsReducer from '../reducers/persons'

export default () => {
  const store = createStore(
    combineReducers({ split: splitReducer, persons: personsReducer })
  )

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
