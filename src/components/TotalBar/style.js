import styled from 'styled-components'

export const TotalBarWrapper = styled.div`
  display: flex;
  margin-bottom: 28px;
  padding: 10px;
  border-radius: 6px;
  background-color: #2ecc71;
  color: #ffffff;
  box-shadow: -4px 32px 24px -16px rgba(46, 204, 112, 0.17);
`
export const TotalBarTotal = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
`

export const TotalBarFields = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  max-width: 140px;
`

export const TotalBarField = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.p`
  margin: 6px;
  font-size: ${props => (props.big ? '28px' : props.medium ? '16px' : '14px')};
  font-weight: ${props => (props.bold ? '700' : '400')};
  text-transform: uppercase;
`
