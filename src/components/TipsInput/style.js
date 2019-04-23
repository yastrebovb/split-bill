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

export const CheckMarkAnimated = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 35px;
  height: 15px;
  animation: zoomInFade 0.3s ease-in-out;
`
