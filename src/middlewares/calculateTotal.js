const calculateTotalMiddleware = ({ dispatch }) => next => action => {
  // let the action go to the reducers
  next(action)

  /*if (action.type !== actionTypes.FETCH_POSTS_REQUEST) {
        return;
  }*/

  switch (action.type) {
    case 'EDIT_TIPS':
    case 'EDIT_BILL':
    case 'DELETE_BILL':
      dispatch({ type: 'CALCULATE_TOTAL' })
      break
    default:
      return
  }
}

export default calculateTotalMiddleware
