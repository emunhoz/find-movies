import React from 'react'
import { IconHeartWhite, IconHeartFull } from '@commons/images'
import * as S from './MovieCard.style'

interface IMovieCard {
  imgUrl?: string
  title: string
  year: string
  onClick?: (e: any) => void
  active?: boolean
  hoverOff?: boolean
}

const ImageNotFound = () => (
  <S.ImageNotFound>
    <S.ImageNotFoundIcon>:(</S.ImageNotFoundIcon>
    <S.ImageNotFoundText>Image not found</S.ImageNotFoundText>
  </S.ImageNotFound>
)

export const MovieCard = ({ active, imgUrl, hoverOff, title, year, onClick }: IMovieCard) => {
  const activeImage = active ? IconHeartFull : IconHeartWhite

  return (
    <S.MovieCard hoverOff={hoverOff}>
      {imgUrl !== 'N/A' && <S.Img loading="lazy" src={imgUrl} alt={title} width="170" height="230" />}
      {imgUrl === 'N/A' && <ImageNotFound />}
      <S.DetailLayer asFav={active!}>
        <S.IconWrapper>
          <img loading="lazy" src={activeImage} width="24" height="24" data-testid="set-as-fav" onClick={onClick}/>
        </S.IconWrapper>
        <S.DetailLayerWrapper>
          <S.Title>{title}</S.Title>
          <S.Year>{year}</S.Year>
        </S.DetailLayerWrapper>
      </S.DetailLayer>
    </S.MovieCard>
  )
}
