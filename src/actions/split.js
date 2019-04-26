import {
  EDIT_FRIENDS,
  EDIT_TIPS,
  EDIT_BILL,
  DELETE_BILL,
  CLEAR_BILL,
  CALCULATE_TIPS_AMOUNT,
  CALCULATE_TOTAL
} from '../constants/actionTypes'

export const editFriends = friends => ({
  type: EDIT_FRIENDS,
  friends
})

export const editTips = tipsPercentage => ({
  type: EDIT_TIPS,
  tipsPercentage
})

export const editBill = bill => ({
  type: EDIT_BILL,
  bill
})

export const deleteBill = () => ({ type: DELETE_BILL })

export const clearBill = () => ({ type: CLEAR_BILL })

export const calculateTipsAmount = () => ({ type: CALCULATE_TIPS_AMOUNT })

export const calculateTotal = () => ({ type: CALCULATE_TOTAL })
