import { generatePersons } from '../actions/persons'
import { getDividedTotal } from '../selectors/'

const createPerson = (id, amount) => ({
  id,
  amount
})

const getPersons = (quantity, dividedAmount) => {
  let personsArr = []

  for (let id = 1; id <= quantity; id++) {
    personsArr.push(createPerson(id, dividedAmount))
  }

  return personsArr
}

const personsMiddleware = ({ dispatch, getState }) => next => action => {
  next(action)

  const quantity = getState().split.friends
  const dividedAmount = getDividedTotal(getState())

  const generatedPersons = getPersons(quantity, dividedAmount)

  if (action.type === 'CALCULATE_TOTAL' || action.type === 'EDIT_FRIENDS') {
    dispatch(generatePersons(generatedPersons))
  }
}

export default personsMiddleware
