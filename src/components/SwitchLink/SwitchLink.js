import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { defaultStyle, activeStyle } from './style'
import { EditPageIcon } from '../../styles/icons'

const SwitchLink = withRouter(props => (
  <NavLink
    to={props.location.pathname === '/' ? '/result' : '/'}
    style={defaultStyle}
    activeStyle={activeStyle}
  >
    {props.location.pathname === '/' ? 'Split Bill' : <EditPageIcon />}
  </NavLink>
))

export default SwitchLink
