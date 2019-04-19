import uuid from 'uuid'

export const addPerson = (amount, locked = false) => ({
  type: 'ADD_PERSON',
  payload: {
    id: uuid(),
    amount,
    locked
  }
})

export const removePerson = ({ id } = {}) => ({
  type: 'REMOVE_PERSON',
  id
})

export const editPerson = (id, updates) => ({
  type: 'EDIT_PERSON',
  id,
  updates
})
