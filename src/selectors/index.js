import { createSelector } from 'reselect'

const splitSelector = state => state.split
const personsSelector = state => state.persons

export const getLastPersonId = createSelector(
  personsSelector,
  personsList => {
    console.log(personsList)
    return [...personsList].pop().id
  }
)

export const getDividedTotal = createSelector(
  splitSelector,
  split => split.total / split.friends
)
