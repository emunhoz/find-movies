import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import createTheme from '@monorepo/design-tokens'
import Routes from './routes'
import { UserProvider } from './contexts/user'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme}>
      <GlobalStyle />
      <UserProvider>
        <Routes />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorkerRegistration.register();
