import styled from 'styled-components'

export const LabelWithLogo = styled.div`
  display: inline-flex;
  min-height: 44px;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.palette.midGrey};
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;
`

export const LogoWrapper = styled.div<{ backgroundLogo: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  padding: 8px;
  background: ${({ backgroundLogo }) => backgroundLogo || 'none'};
`

export const Logo = styled.img`
  width: 100%;
  max-width: 35px;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.palette.white};
`
