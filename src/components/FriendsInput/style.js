import styled from 'styled-components'

export const FriendsInputStyled = styled.div`
  position: relative;
  margin: 38px 0;
`

export const FriendsCount = styled.div`
  position: absolute;
  top: 4px;
  right: 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.white ? '#ffffff' : '#4e4e4e')};
`

export const TrackStyle = {
  position: 'relative',
  top: '-30px',
  backgroundColor: '#2ecc71',
  height: '30px',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
  transition: 'all .075s linear',
  cursor: 'pointer'
}

export const RailStyle = {
  height: '30px',
  backgroundColor: 'rgba(239, 237, 232, 0.5)',
  borderRadius: '4px',
  transition: 'all .075s linear',
  cursor: 'pointer'
}

export const handleStyle = {
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
