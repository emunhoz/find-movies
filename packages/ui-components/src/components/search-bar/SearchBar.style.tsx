import styled, { css } from 'styled-components'

const ErrorStyle = css`
  border: 2px solid ${({ theme }) => theme.palette.negative};
`

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

export const Input = styled.input<{ error: boolean; }>`
  width: -webkit-fill-available;
  padding: 12px 12px 12px 40px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  border: none;
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;

  ${({ error }) => error && ErrorStyle};
`

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`
