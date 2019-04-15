import uuid from 'uuid'

export const addPerson = ({ amount = 1, locked = false } = {}) => ({
  type: 'ADD_PERSON',
  personData: {
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
