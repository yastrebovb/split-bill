import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Dots from '../../components/Dots/Dots'

test('should render Dots correctly', () => {
  const wrapper = shallow(<Dots />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
