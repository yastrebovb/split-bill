import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { TipsInput } from '../../components/TipsInput/TipsInput'

test('should render TipsInput correctly', () => {
  const wrapper = shallow(<TipsInput />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
