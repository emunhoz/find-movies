import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import createTheme from '@monorepo/design-tokens'
import Home from './pages/home/Home'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
