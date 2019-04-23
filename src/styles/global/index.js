import styled, { createGlobalStyle } from 'styled-components'
import { zoomIn } from '../animations/'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  @keyframes zoomInFade {
    0%{
      transform: scale(1);
      opacity: 0.5;
    }

    50% {
      transform: scale(1.25);
      opacity: 0.75;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: translateY(-80px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
    }
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
