export const addPerson = (id, amount, locked = false) => ({
  type: 'ADD_PERSON',
  payload: {
    id,
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

export const generatePersons = (quantity, amount) => ({
  type: 'GENERATE_PERSONS',
  quantity,
  amount
})
