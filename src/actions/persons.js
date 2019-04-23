export const addPerson = (id, amount) => ({
  type: 'ADD_PERSON',
  payload: {
    id,
    amount
  }
})

export const generatePersons = persons => ({
  type: 'GENERATE_PERSONS',
  persons
})
