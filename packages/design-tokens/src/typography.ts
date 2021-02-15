export interface Typography {
  type: {
    primary: string
  }
  weight: {
    regular: string
    medium: string
    bold: string
  }
  size: {
    regular: number
    medium: number
    large: number
    extraLarge: number
  }
}

export const typography: Typography = {
  type: {
    primary: '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
  },
  weight: {
    regular: '300',
    medium: '400',
    bold: '600'
  },
  size: {
    regular: 16,
    medium: 20,
    large: 24,
    extraLarge: 80
  }
}
