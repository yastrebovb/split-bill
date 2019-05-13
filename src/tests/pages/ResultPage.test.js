import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import ResultPage from '../../pages/ResultPage/ResultPage'

test('should render ResultPage correctly', () => {
  const wrapper = shallow(<ResultPage />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
