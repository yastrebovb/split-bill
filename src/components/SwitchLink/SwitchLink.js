import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import { EditPageIcon } from '../../styles/icons'

const SwitchLink = withRouter(props => (
  <NavLink
    to={props.location.pathname === '/' ? '/result' : '/'}
    style={{
      display: 'block',
      width: '96%',
      padding: '10px 0',
      margin: '10px auto',
      borderRadius: '4px',
      backgroundColor: '#2ecc71',
      textTransform: 'uppercase',
      textAlign: 'center',
      textDecoration: 'none',
      color: '#ffffff',
      transition: 'width .3s ease-out'
    }}
    activeStyle={{
      margin: '58px auto -60px',
      width: '80px',
      height: '80px',
      borderTopLeftRadius: '160px',
      borderTopRightRadius: '160px'
    }}
  >
    {props.location.pathname === '/' ? 'Split Bill' : <EditPageIcon />}
  </NavLink>
))

export default SwitchLink
