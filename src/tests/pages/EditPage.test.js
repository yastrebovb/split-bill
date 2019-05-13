import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import EditPage from '../../pages/EditPage/EditPage'

test('should render EditPage correctly', () => {
  const wrapper = shallow(<EditPage />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
