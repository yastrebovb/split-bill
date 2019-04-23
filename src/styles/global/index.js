import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export const App = styled.div`
  max-width: 450px;
  margin: 50px auto;
  padding: 20px 12px;
  box-shadow: 3px 4px 25px -15px rgba(179, 179, 179, 1);
  border-radius: 10px;
  overflow: hidden;
`
