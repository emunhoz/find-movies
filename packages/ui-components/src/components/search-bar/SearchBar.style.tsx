import styled from 'styled-components'

export const SearchBar = styled.div`
  position: relative;
`

export const SearchIcon = styled.div`
  position: absolute;
  display: flex;
  height: -webkit-fill-available;
  padding: 9px 12px;

  img {
    opacity: .5;
  }
`

export const Input = styled.input`
  width: -webkit-fill-available;
  padding: 12px 12px 12px 40px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
`
