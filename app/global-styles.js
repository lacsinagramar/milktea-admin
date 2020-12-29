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

  .font-weight-100 {
    font-weight: 100;
  }
  .font-weight-200 {
    font-weight: 200;
  }
  .font-weight-300 {
    font-weight: 300;
  }
  .font-weight-400 {
    font-weight: 400;
  }
  .font-weight-500 {
    font-weight: 500;
  }
  .font-weight-600 {
    font-weight: 600;
  }
  .font-weight-700 {
    font-weight: 700;
  }
  .font-weight-800 {
    font-weight: 800;
  }
  .font-weight-900 {
    font-weight: 900;
  }

  .custom {
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

    // Background Colors
    .bg-primary {
      background-color: ${colors.primary}!important;
    }

    .bg-secondary {
      background-color: ${colors.secondary}!important;
    }

    // Text Colors
    .text-primary {
      color: ${colors.primary}!important;
    }

    .text-secondary {
      color: ${colors.secondary}!important;
    }
  }
`

export default GlobalStyle
