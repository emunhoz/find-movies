import styled from 'styled-components'

export const LabelWithLogo = styled.div`
  display: inline-flex;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.lightGrey};
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
`

export const LogoWrapper = styled.div<{ backgroundLogo: string }>`
  display: flex;
  align-items: center;
  min-width: 24px;
  background: ${({ backgroundLogo }) => backgroundLogo || 'none'};
`

export const Logo = styled.img`
  max-height: 30px;
  padding: 8px;
`

export const Value = styled.div`
  padding: 8px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  color: ${({ theme }) => theme.palette.white};
`
