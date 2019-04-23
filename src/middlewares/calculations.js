import { calculateTipsAmount, calculateTotal } from '../actions/split'

const calculateTipsMiddleware = ({ dispatch }) => next => action => {
  next(action)

  switch (action.type) {
    case 'EDIT_TIPS':
    case 'EDIT_BILL':
    case 'DELETE_BILL':
    case 'CLEAR_BILL':
      dispatch(calculateTipsAmount())
      dispatch(calculateTotal())
      break
    default:
      return
  }
}

export default calculateTipsMiddleware
