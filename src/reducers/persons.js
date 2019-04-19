const personsReducerDefaultState = [
  {
    id: 1,
    amount: 0,
    locked: false
  },
  {
    id: 2,
    amount: 0,
    locked: false
  },
  {
    id: 3,
    amount: 0,
    locked: false
  }
]

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
    default:
      return state
  }
}
