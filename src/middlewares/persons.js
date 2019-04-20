import { generatePersons } from '../actions/persons'
import { getDividedTotal } from '../selectors/'

const personsMiddleware = ({ dispatch, getState }) => next => action => {
  next(action)
  // Add action type check

  switch (action.type) {
    case 'CALCULATE_TOTAL':
    case 'EDIT_FRIENDS':
      dispatch(
        generatePersons(getState().split.friends, getDividedTotal(getState()))
      )
      break
    default:
      return
  }
}

export default personsMiddleware
