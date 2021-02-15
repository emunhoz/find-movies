import styled, { css } from 'styled-components'

const BlockStyle = css`
  display: block;
  width: 100%;
`

const ActiveStyle = css`
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.secondary};
  border: 1px solid ${({ theme }) => theme.palette.secondary};
  
  svg {
    opacity: 1;
  }

  :hover {
    opacity: .9;
  }

  path:last-child {
    fill: ${({ theme }) => theme.palette.white};
  }
`

export const Button = styled.button<{ block: boolean; active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.palette.lightGrey};
  background: none;
  border: 1px solid ${({ theme }) => theme.palette.lightGrey};
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;

  :hover {
    color: ${({ theme }) => theme.palette.white};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.palette.secondary};

    svg {
      opacity: 1;
    }
  }

  :disabled {
    opacity: 0.5;
  }

  svg {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    opacity: .5;
  }

  ${({ block }) => block && BlockStyle};
  ${({ active }) => active && ActiveStyle};
`
