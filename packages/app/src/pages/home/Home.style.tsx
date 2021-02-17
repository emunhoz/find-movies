import styled from 'styled-components'

export const Logo = styled.img`
  margin-bottom: 20px;
`

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`

export const EmptyStateWrapper = styled.div`
  text-align: center;
`

export const EmptyStateImg = styled.img`
  width: 100%;
  max-width: fit-content;
`

export const EmptyStateTitle = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.typography.size.large}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.palette.white};
`

export const EmptyStateSubTitle = styled.div`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.palette.lightGrey};
`