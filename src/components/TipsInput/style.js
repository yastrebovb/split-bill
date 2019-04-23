import styled from 'styled-components'

export const Tips = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`

export const Tip = styled.div`
  position: relative;
  width: 18%;
  padding: 7px 4px;
  text-align: center;
  color: #747d8c;
  border: 1.5px solid;
  border-color: ${props =>
    props.status === 'selected' ? '#2ecc71' : '#d1d8e0'}
  border-radius: 4px;
  transition: all .2s linear;
  user-select: none;
  cursor: pointer;
`
