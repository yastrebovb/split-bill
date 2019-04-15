const splitReducerDefaultState = {
  total: undefined,
  bill: undefined,
  friends: 3,
  tips: 0
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
    case 'EDIT_BILL':
      return {
        ...state,
        bill: state.bill === undefined ? action.bill : state.bill + action.bill
      }
    case 'DELETE_BILL':
      return {
        ...state,
        bill: state.bill.slice(0, -1)
      }
    default:
      return state
  }
}
