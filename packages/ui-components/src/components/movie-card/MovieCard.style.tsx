import styled, { css } from 'styled-components'

export const HeartIconSVG = styled.img``

export const DetailLayerWrapper = styled.div``

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.midGrey};
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const Title = styled.h2`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.typography.size.medium}px;
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  text-align: left;
`

export const Year = styled.div`
  font-size: ${({ theme }) => theme.typography.size.regular}px;
  text-align: left;
`

const IconFavActiveStyle = css`
  background: none;
  opacity: 1;
  transform: translateY(0%);

  path:last-child {
    fill: ${({ theme }) => theme.palette.white};
  }

  ${DetailLayerWrapper} {
    opacity: 0;
  }
`

export const DetailLayer = styled.div<{ asFav: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px;
  background: #353f4ce0;
  opacity: 0;
  transition: ease-in .2s;
  transform: translateY(100%);

  ${({ asFav }) => asFav && IconFavActiveStyle};
`

export const MovieCard = styled.div<{ hoverOff?: boolean }>`
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 170px;
  height: 100%;
  min-height: 246px;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.attributes.borderRadius.small}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}px) {
    max-height: 610px;
  }

  ${({ hoverOff }) => !hoverOff && `
    :hover {
      ${DetailLayer} {
        opacity: 1;
        transform: translateY(0%);
      }

      img {
        cursor: pointer;
      }
    }
  `}
`

export const ImageNotFound = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 100%;
  padding: 10px;
  text-align: center;
  background: #353f4c;
`

export const ImageNotFoundIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.size.large}px;
`

export const ImageNotFoundText = styled.p`
  font-size: ${({ theme }) => theme.typography.size.medium}px;
`
