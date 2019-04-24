import styled, { createGlobalStyle } from 'styled-components'
import media from '../templates/'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  html {
    height: 100%;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    background-color: #f5f5f5;
  }

  html, body, #root{
    height: 100%
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
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
  width: 450px;
  margin: auto;
  padding: 20px 12px;
  box-shadow: 3px 4px 25px -15px rgba(179, 179, 179, 1);
  border-radius: 6px;
  background-color: #ffffff;
  overflow: hidden;

  ${media.phone`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%; 
    max-width: 100%;
    height: 100%;
  `}
`
