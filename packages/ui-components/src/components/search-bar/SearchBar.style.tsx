import styled from 'styled-components'

export const SearchBar = styled.div`
  position: relative;
`

export const SearchIcon = styled.div`
  position: absolute;
  padding: 9px 12px;

  svg {
    opacity: .5;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 16px;
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
`
