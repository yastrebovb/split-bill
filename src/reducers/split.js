const splitReducerDefaultState = {
  total: 0,
  bill: 0,
  friends: 3,
  tipsPercentage: 0,
  tipsAmount: 0
}

export default (state = splitReducerDefaultState, action) => {
  let bill

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
      bill = state.bill === 0 ? action.bill : state.bill + action.bill

      return {
        ...state,
        bill
      }
    case 'DELETE_BILL':
      bill =
        Number(state.bill) && state.bill.length > 1
          ? state.bill.slice(0, -1)
          : 0

      return {
        ...state,
        bill
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
