import React from 'react'
import Slider from 'rc-slider'
import { connect } from 'react-redux'
import { editFriends } from '../../actions/split'
import styled from 'styled-components'
import { PersonsIcon } from '../../styles/icons/'

const FriendsInputStyled = styled.div`
  position: relative;
  margin: 38px 0;
`

const FriendsCount = styled.div`
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.white ? '#ffffff' : '#4e4e4e')};
`

const TrackStyle = {
  position: 'relative',
  top: '-30px',
  backgroundColor: '#2ecc71',
  height: '30px',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  transition: 'all .075s linear',
  cursor: 'pointer'
}

const RailStyle = {
  height: '30px',
  backgroundColor: 'rgba(239, 237, 232, 0.5)',
  borderRadius: '4px',
  transition: 'all .075s linear',
  cursor: 'pointer'
}

const handleStyle = {
  position: 'relative',
  top: '-70px',
  height: 54,
  width: 8,
  backgroundColor: '#2ecc4a',
  borderRadius: '2px',
  outline: 'none',
  transition: 'all .075s linear',
  cursor: 'pointer'
}

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
