import { createStore, applyMiddleware } from 'redux'
import calculateTotalMiddleware from '../middlewares/calculateTotal'
import splitReducer from '../reducers/split'
import personsReducer from '../reducers/persons'

export default () => {
  const store = createStore(
    (state = {}, action) => ({
      split: splitReducer(state.split, action, state),
      persons: personsReducer(state.persons, action, state)
    }),
    applyMiddleware(calculateTotalMiddleware)
  )

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
