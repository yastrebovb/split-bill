import { createStore, applyMiddleware } from 'redux'
import splitReducer from '../reducers/split'
import personsReducer from '../reducers/persons'
import middlewares from '../middlewares/'

export default () => {
  const store = createStore(
    (state = {}, action) => ({
      split: splitReducer(state.split, action, state),
      persons: personsReducer(state.persons, action, state)
    }),
    applyMiddleware(middlewares)
  )

  store.subscribe(() => {
    console.log(store.getState())
  })

  return store
}
