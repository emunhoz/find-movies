import { LogoImdb, LogoRottenTomatoes, LogoMetacritic } from '@commons/images'

interface imageIcon {
  [key: string]: {
    background: string
    img: string
  }
}

const Icons: imageIcon = {
  'Internet Movie Database': {
    background: '#ff9e1c',
    img: LogoImdb
  },
  'Rotten Tomatoes': {
    background: '#ff403f',
    img: LogoRottenTomatoes
  },
  'Metacritic': {
    background: 'blue',
    img: LogoMetacritic
  },
}

export default Icons
