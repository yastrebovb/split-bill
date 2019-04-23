import React from 'react'
import Slider from 'rc-slider'
import { connect } from 'react-redux'
import { editFriends } from '../../actions/split'
import {
  FriendsInputStyled,
  FriendsCount,
  TrackStyle,
  RailStyle,
  handleStyle
} from './style'
import { PersonsIcon } from '../../styles/icons/'

const FriendsInput = ({ editFriends, friends }) => (
  <FriendsInputStyled>
    <Slider
      min={1}
      max={6}
      step={1}
      value={friends}
      style={{
        height: '50px'
      }}
      handleStyle={handleStyle}
      trackStyle={TrackStyle}
      railStyle={RailStyle}
      onChange={value => {
        editFriends(value)
      }}
    />
    <PersonsIcon />
    <FriendsCount white={friends === 6 ? true : false}>{friends}</FriendsCount>
  </FriendsInputStyled>
)

const mapStateToProps = state => {
  return {
    friends: state.split.friends
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editFriends: value => {
      value > 1 && dispatch(editFriends(value))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsInput)
