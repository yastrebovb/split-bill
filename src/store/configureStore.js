import { createStore } from 'redux'
import splitReducer from '../reducers/split'
import personsReducer from '../reducers/persons'

export default () => {
  const store = createStore((state = {}, action) => ({
    split: splitReducer(state.split, action, state),
    persons: personsReducer(state.persons, action, state)
  }))

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
