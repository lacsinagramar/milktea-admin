import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#F5DF4D',
  secondary: '#96999C',
  white: '#FFFFFF',
  black: '#000000',
}

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    * {
      font-family: 'Montserrat', sans-serif;
    }
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .full-height {
    min-height: 100vh
  }

  // Button Colors
  .btn-primary {
    background-color: ${colors.primary}!important;
    border-color: ${colors.primary}!important;
    color: ${colors.black}!important
  }
  .btn-secondary {
    background-color: ${colors.secondary}!important;
    border-color: ${colors.secondary}!important;
    color: ${colors.white}!important
  }
`

export default GlobalStyle
