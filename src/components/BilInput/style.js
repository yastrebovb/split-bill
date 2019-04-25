import styled from 'styled-components'

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

export const Button = styled.button`
  position: relative;
  width: 25%;
  margin: 12px;
  padding: 0;
  color: #4e4e4e;
  font-weight: 700;
  text-align: center;
  transition: all 0.1s linear;
  border: none;
  user-select: none;
  outline: none;
  cursor: pointer;

  &:active {
    transform: scale(1.2);
  }
`
