const personsMiddleware = ({ dispatch }) => next => action => {
  next(action)

  // Add action type check

  switch (action.type) {
    case 'CALCULATE_TOTAL':
    case 'EDIT_FRIENDS':
      break
    default:
      return
  }
}

export default personsMiddleware
