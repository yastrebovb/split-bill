import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { PersonsList } from '../../components/Personslist/Personslist'
import persons from '../fixtures/persons'

test('should render Personslist correctly', () => {
  const wrapper = shallow(<PersonsList persons={persons} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
