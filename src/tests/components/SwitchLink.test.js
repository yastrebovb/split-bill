import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import SwitchLink from '../../components/SwitchLink/SwitchLink'

test('should render SwitchLink correctly', () => {
  const links = {
    firstLink: '/',
    secondLimk: 'blog'
  }

  const wrapper = shallow(<SwitchLink {...links} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
