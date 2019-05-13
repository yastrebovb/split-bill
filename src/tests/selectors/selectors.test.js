import { getDividedTotal, getPersonsQuantity } from '../../selectors/'

const state = {
  persons: [
    {
      id: 1,
      amount: 25
    },
    {
      id: 2,
      amount: 25
    },
    {
      id: 3,
      amount: 25
    }
  ],
  split: {
    total: 75,
    bill: '75',
    friends: 3,
    tipsPercentage: 0,
    tipsAmount: 0
  }
}

test('should get divided total', () => {
  expect(getDividedTotal(state)).toBe(25)
})

test('should get persons quantity', () => {
  expect(getPersonsQuantity(state)).toBe(3)
})
