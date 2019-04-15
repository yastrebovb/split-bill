const splitReducerDefaultState = {
  total: undefined,
  bill: undefined,
  friends: undefined,
  tips: undefined
}

export default (state = splitReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_FRIENDS':
      return {
        ...state,
        friends: action.friends
      }
    case 'EDIT_TIPS':
      return {
        ...state,
        tips: action.tips
      }
    default:
      return state
  }
}
