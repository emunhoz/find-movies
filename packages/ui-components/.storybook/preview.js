import React from 'react'
import { ThemeProvider } from 'styled-components'
import createTheme from '@monorepo/design-tokens'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'significa-invision',
    values: [
      {
        name: 'significa-invision',
        value: '#0a0f14',
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={createTheme}>
      <center>
        <Story />
      </center>
    </ThemeProvider>
  ),
];