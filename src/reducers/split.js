import {
  EDIT_FRIENDS,
  EDIT_TIPS,
  EDIT_BILL,
  DELETE_BILL,
  CLEAR_BILL,
  CALCULATE_TIPS_AMOUNT,
  CALCULATE_TOTAL
} from '../constants/actionTypes'

const splitReducerDefaultState = {
  total: 0,
  bill: '0',
  friends: 3,
  tipsPercentage: 0,
  tipsAmount: 0
}

const calculateTipsAmount = (bill, tipsPercentage) =>
  parseFloat((bill * (tipsPercentage / 100)).toFixed(2))

const deleteLastNumber = bill =>
  Number(bill) && bill.length > 1 ? bill.slice(0, -1) : '0'

const editBill = (bill, number) => (Number(bill) ? bill + number : number)

export default (state = splitReducerDefaultState, action) => {
  switch (action.type) {
    case EDIT_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }
    case EDIT_TIPS:
      return {
        ...state,
        tipsPercentage: action.tipsPercentage
      }
    case EDIT_BILL:
      return {
        ...state,
        bill: editBill(state.bill, action.bill)
      }
    case DELETE_BILL:
      return {
        ...state,
        bill: deleteLastNumber(state.bill)
      }
    case CLEAR_BILL:
      return {
        ...state,
        bill: '0'
      }
    case CALCULATE_TIPS_AMOUNT:
      return {
        ...state,
        tipsAmount: calculateTipsAmount(state.bill, state.tipsPercentage)
      }
    case CALCULATE_TOTAL:
      return {
        ...state,
        total: Number(state.bill) + Number(state.tipsAmount)
      }
    default:
      return state
  }
}
