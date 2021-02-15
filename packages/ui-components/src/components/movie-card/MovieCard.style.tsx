import styled, { css } from 'styled-components'
import { HeartIcon } from '@commons/images'

export const HeartIconSVG = styled(HeartIcon)`
  width: 24px;
  height: 24px;
  box-shadow: 0 0 25px -10px #000;
`

export const DetailLayerWrapper = styled.div``

export const Img = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
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
  width: 100%;
  height: 100%;
  padding: 12px;
  background: #353f4ce0;
  opacity: 0;
  transition: ease-in .2s;
  transform: translateY(100%);

  ${({ asFav }) => asFav && IconFavActiveStyle};
`

export const MovieCard = styled.div`
  position: relative;
  display: inline-block;
  width: 168px;
  height: 230px;
  overflow: hidden;
  color: ${({ theme }) => theme.palette.white};

  :hover {
    ${DetailLayer} {
      opacity: 1;
      transform: translateY(0%);
    }

    ${HeartIconSVG} {
      cursor: pointer;
    }
  }
`
