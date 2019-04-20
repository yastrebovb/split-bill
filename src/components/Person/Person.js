import React from 'react'
import Resizable from 're-resizable'

const Person = ({ amount }) => {
  return (
    <Resizable
      defaultSize={{
        width: 320,
        height: 200
      }}
    >
      {amount}
    </Resizable>
  )
}

export default Person
