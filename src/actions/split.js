export const editFriends = friends => ({
  type: 'EDIT_FRIENDS',
  friends
})

export const editTips = tips => ({
  type: 'EDIT_TIPS',
  tips
})

export const editPerson = (id, updates) => ({
  type: 'EDIT_PERSON',
  id,
  updates
})
