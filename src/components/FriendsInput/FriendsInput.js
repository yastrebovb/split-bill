import React from 'react'
import Slider, { Range } from 'rc-slider'
import { connect } from 'react-redux'
import { editFriends } from '../../actions/split'

const FriendsInput = ({ dispatch }) => {
  return (
    <div>
      <Slider
        min={2}
        max={8}
        step={1}
        handleStyle={{
          borderColor: 'blue',
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -9,
          backgroundColor: 'black'
        }}
        railStyle={{ backgroundColor: 'red', height: 10 }}
        onChange={value => {
          dispatch(editFriends(value))
        }}
      />
    </div>
  )
}

export default connect()(FriendsInput)
