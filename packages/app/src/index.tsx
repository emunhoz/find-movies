import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import createTheme from '@monorepo/design-tokens'
import Routes from './routes'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
