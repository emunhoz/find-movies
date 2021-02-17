import styled from 'styled-components'

export const Layout = styled.div`
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'main';
  }
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  height: -webkit-fill-available;
  padding: 20px;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'header header header header'
    'main main main main'
`
