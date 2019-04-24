import { createStore, applyMiddleware, compose } from 'redux'
import splitReducer from '../reducers/split'
import personsReducer from '../reducers/persons'
import { calculationsMiddleware, personsMiddleware } from '../middlewares/'

export default () => {
  const store = createStore(
    (state = {}, action) => ({
      split: splitReducer(state.split, action, state),
      persons: personsReducer(state.persons, action, state)
    }),
    compose(
      applyMiddleware(calculationsMiddleware, personsMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  )

  return store
}
