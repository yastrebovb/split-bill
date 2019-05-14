import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { TotalBar } from '../../components/TotalBar/TotalBar'
import split from '../fixtures/split'

test('should render TotalBar correctly', () => {
  const wrapper = shallow(<TotalBar split={split} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
