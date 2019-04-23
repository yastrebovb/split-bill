import { calculateTipsAmount, calculateTotal } from '../actions/split'

const calculateTipsMiddleware = ({ dispatch }) => next => action => {
  next(action)

  if (
    action.type === 'EDIT_TIPS' ||
    action.type === 'EDIT_BILL' ||
    action.type === 'DELETE_BILL' ||
    action.type === 'CLEAR_BILL'
  ) {
    dispatch(calculateTipsAmount())
    dispatch(calculateTotal())
  }
}

export default calculateTipsMiddleware
