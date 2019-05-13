import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Person from '../../components/Person/Person'
import persons from '../fixtures/persons'

test('should render Person correctly', () => {
  const wrapper = shallow(<Person {...persons[0]} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
