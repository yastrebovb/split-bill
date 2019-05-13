import { addPerson, generatePersons } from '../../actions/persons'

test('should setup add person action object', () => {
  const action = addPerson(1, 10)

  expect(action).toEqual({
    type: 'ADD_PERSON',
    payload: {
      id: 1,
      amount: 10
    }
  })
})

test('should setup generate persons action object', () => {
  const action = generatePersons([{ id: 1, amount: 10 }, { id: 2, amount: 10 }])

  expect(action).toEqual({
    type: 'GENERATE_PERSONS',
    persons: [{ id: 1, amount: 10 }, { id: 2, amount: 10 }]
  })
})
