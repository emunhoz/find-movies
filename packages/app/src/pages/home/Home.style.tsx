import styled from 'styled-components'

export const Logo = styled.img`
  margin-bottom: 20px;
`

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(168px, 1fr));
  grid-gap: 2em;
  width: 100%;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  padding: 20px 0;
`
