import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globals'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { PostContextProvider } from './context/PostContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
