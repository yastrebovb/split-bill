import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { FriendsInput } from '../../components/FriendsInput/FriendsInput'

test('should render FriendsInput correctly', () => {
  const wrapper = shallow(<FriendsInput />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
