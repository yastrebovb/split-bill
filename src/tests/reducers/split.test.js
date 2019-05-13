import splitReducer from '../../reducers/split'
import split from '../fixtures/split'

test('should setup default split values', () => {
  const defaultState = split

  const state = splitReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual(defaultState)
})

test('should edit friends quantity', () => {
  const action = {
    type: 'EDIT_FRIENDS',
    friends: 4
  }

  const state = splitReducer(split, action)

  expect(state.friends).toBe(4)
})

test('should edit tips percentage', () => {
  const action = {
    type: 'EDIT_TIPS',
    tipsPercentage: 20
  }

  const state = splitReducer(split, action)

  expect(state.tipsPercentage).toBe(20)
})

test('should edit bill by adding to the end', () => {
  const currentState = {
    total: undefined,
    bill: '11',
    friends: undefined,
    tipsPercentage: undefined,
    tipsAmount: undefined
  }

  const action = {
    type: 'EDIT_BILL',
    bill: 1
  }

  const state = splitReducer(currentState, action)

  expect(state.bill).toBe('111')
})

test('should edit bill by replacing zero as the only char', () => {
  const action = {
    type: 'EDIT_BILL',
    bill: 1
  }

  const state = splitReducer(split, action)

  expect(state.bill).toBe('1')
})

test('should delete last character of bill', () => {
  const currentState = {
    total: undefined,
    bill: '11',
    friends: undefined,
    tipsPercentage: undefined,
    tipsAmount: undefined
  }

  const action = { type: 'DELETE_BILL' }

  const state = splitReducer(currentState, action)

  expect(state.bill).toBe('1')
})

test("should replace the bill with zero if it's 1 char long ", () => {
  const action = { type: 'DELETE_BILL' }

  const state = splitReducer(split, action)

  expect(state.bill).toBe('0')
})

test('should clear bill', () => {
  const action = { type: 'CLEAR_BILL' }

  const state = splitReducer(split, action)

  expect(state.bill).toBe('0')
})

test('should calculate tips amount', () => {
  const currentState = {
    total: undefined,
    bill: '100',
    friends: undefined,
    tipsPercentage: 10,
    tipsAmount: undefined
  }

  const action = { type: 'CALCULATE_TIPS_AMOUNT' }

  const state = splitReducer(currentState, action)

  expect(state.tipsAmount).toBe(10)
})

test('should calculate total', () => {
  const currentState = {
    total: undefined,
    bill: '100',
    friends: undefined,
    tipsPercentage: 10,
    tipsAmount: 10
  }

  const action = { type: 'CALCULATE_TOTAL' }

  const state = splitReducer(currentState, action)

  expect(state.total).toBe(110)
})
