import styled from 'styled-components'
import media from '../../styles/templates/'

export const DotsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 44px;
  margin-bottom: 14px;

  ${media.phone`
    display: none;
  `}
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props =>
    props.red
      ? '#ff5c5c'
      : props.orange
      ? '#ffbd4c'
      : props.green
      ? '#19cc32'
      : 'none'};
`
