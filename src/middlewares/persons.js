import { calculateTipsAmount, calculateTotal } from '../actions/split'

const personsMiddleware = ({ dispatch }) => next => action => {
  next(action)

  // Add action type check

  switch (action.type) {
    case 'EDIT_FRIENDS':
      alert('EDITED FRIENDS')
      break
    default:
      return
  }
}

export default personsMiddleware
