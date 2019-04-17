export const editFriends = friends => ({
  type: 'EDIT_FRIENDS',
  friends
})

export const editTips = tipsPercentage => ({
  type: 'EDIT_TIPS',
  tipsPercentage
})

export const editBill = bill => ({
  type: 'EDIT_BILL',
  bill
})

export const deleteBill = () => ({
  type: 'DELETE_BILL'
})
