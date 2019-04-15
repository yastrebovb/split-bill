export const editFriends = friends => ({
  type: 'EDIT_FRIENDS',
  friends
})

export const editTips = tips => ({
  type: 'EDIT_TIPS',
  tips
})

export const editBill = bill => ({
  type: 'EDIT_BILL',
  bill
})

export const deleteBill = () => ({
  type: 'DELETE_BILL'
})
