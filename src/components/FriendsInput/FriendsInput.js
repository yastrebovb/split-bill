import React from 'react'
import Slider from 'rc-slider'
import { connect } from 'react-redux'
import { editFriends } from '../../actions/split'

const FriendsInput = ({ dispatch, friends }) => {
  const handleStyle = {
    position: 'relative',
    top: '-70px',
    height: 54,
    width: 8,
    backgroundColor: '#009432'
  }

  return (
    <div>
      <Slider
        min={1}
        max={6}
        step={1}
        value={friends}
        handleStyle={handleStyle}
        trackStyle={{
          position: 'relative',
          top: '-30px',
          backgroundColor: '#2ecc71',
          height: '30px'
        }}
        railStyle={{ backgroundColor: '#f7f1e3', height: '30px' }}
        onChange={value => {
          dispatch(editFriends(value))
        }}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    friends: state.split.friends
  }
}

export default connect(mapStateToProps)(FriendsInput)
