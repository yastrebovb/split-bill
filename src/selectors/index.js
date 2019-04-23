import { createSelector } from 'reselect'

const splitSelector = state => state.split
const personsSelector = state => state.persons

export const getDividedTotal = createSelector(
  splitSelector,
  split => (split.total / split.friends).toFixed(2)
)

export const getPersonsQuantity = createSelector(
  splitSelector,
  split => split.friends
)
