import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['blue']};
  }

  body {
    background-color: ${({ theme }) => theme.colors['base-background']};
    color: ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button { 
    color: ${({ theme }) => theme.colors['base-text']};
    font: 400 1rem 'Nunito', sans-serif;
    line-height: 1.6;
  }
`
