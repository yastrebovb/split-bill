const splitReducerDefaultState = {
  total: 0,
  bill: 0,
  friends: 3,
  tipsPercentage: 0,
  tipsAmount: 0
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
        tipsPercentage: action.tipsPercentage
      }
    case 'EDIT_BILL':
      return {
        ...state,
        bill: state.bill === 0 ? action.bill : state.bill + action.bill
      }
    case 'DELETE_BILL':
      return {
        ...state,
        bill: state.bill.slice(0, -1)
      }
    case 'CALCULATE_TIPS_AMOUNT':
      return {
        ...state,
        tipsAmount: (state.bill * (state.tipsPercentage / 100)).toFixed(2)
      }
    case 'CALCULATE_TOTAL':
      return {
        ...state,
        total: +state.bill + +state.tipsAmount
      }
    default:
      return state
  }
}
