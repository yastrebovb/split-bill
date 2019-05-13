import personsReducer from '../../reducers/persons'
import persons from '../fixtures/persons'

test('should setup default persons values', () => {
  const defaultState = persons

  const state = personsReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual(defaultState)
})

test('should add person', () => {
  const person = {
    id: 4,
    amount: 10
  }

  const action = {
    type: 'ADD_PERSON',
    payload: {
      ...person
    }
  }

  const state = personsReducer(persons, action)

  expect(state).toEqual([...persons, person])
})

test('should generate persons', () => {
  const action = {
    type: 'GENERATE_PERSONS',
    persons
  }

  const state = personsReducer(undefined, action)

  expect(state).toEqual(persons)
})
