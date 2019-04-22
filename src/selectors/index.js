import { createSelector } from 'reselect'

const splitSelector = state => state.split
const personsSelector = state => state.persons

export const getDividedTotal = createSelector(
  splitSelector,
  split => split.total / split.friends
)

export const getPersonsQuantity = createSelector(
  splitSelector,
  split => split.friends
)

export const getLastPersonId = createSelector(
  personsSelector,
  personsList => {
    return [...personsList].length ? [...personsList].pop().id : 1
  }
)
