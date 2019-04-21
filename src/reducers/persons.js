const personsReducerDefaultState = [
  {
    id: 1,
    locked: false,
    amount: 1
  },
  {
    id: 2,
    locked: false,
    amount: 1
  },
  {
    id: 3,
    locked: false,
    amount: 1
  }
]

const generatePersons = (quantity, amount) => {
  let res = []

  for (let i = 1; i <= quantity; i++) {
    res.push({
      id: i,
      locked: false,
      amount
    })
  }

  return res
}

export default (state = personsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload]
    case 'REMOVE_PERSON':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_PERSON':
      return state.map(person => {
        if (person.id === action.id) {
          return { ...person, ...action.updates }
        } else {
          return person
        }
      })
    case 'GENERATE_PERSONS':
      return generatePersons(action.quantity, action.amount)
    default:
      return state
  }
}
