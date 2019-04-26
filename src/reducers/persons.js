import { ADD_PERSON, GENERATE_PERSONS } from '../constants/actionTypes'

const personsReducerDefaultState = [
  {
    id: 1,
    amount: 0
  },
  {
    id: 2,
    amount: 0
  },
  {
    id: 3,
    amount: 0
  }
]

export default (state = personsReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload]
    case GENERATE_PERSONS:
      return action.persons
    default:
      return state
  }
}
