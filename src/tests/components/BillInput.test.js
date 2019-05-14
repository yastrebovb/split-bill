import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { BillInput } from '../../components/BilInput/BillInput'

test('should render BillInput correctly', () => {
  const wrapper = shallow(<BillInput />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
