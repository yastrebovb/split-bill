const personsReducerDefaultState = [
  {
    id: 1,
    amount: 1
  },
  {
    id: 2,
    amount: 1
  },
  {
    id: 3,
    amount: 1
  }
]

export default (state = personsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload]
    case 'GENERATE_PERSONS':
      console.log('reducer generate')
      return action.persons
    default:
      return state
  }
}
