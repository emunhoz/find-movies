import React from 'react'

import * as S from './MovieCard.style'

interface IMovieCard {
  imgUrl?: string
  active?: boolean
  title: string
  year: string
  onClickCard: () => void
}

export const MovieCard = ({ active, onClickCard, imgUrl, title, year }: IMovieCard) => {
  return (
    <S.MovieCard data-testid="movie-card">
      <S.Img src={imgUrl} alt={title} />
      <S.DetailLayer asFav={active!}>
        <S.IconWrapper><S.HeartIconSVG data-testid="set-as-fav" onClick={() => onClickCard()} /></S.IconWrapper>
        <S.DetailLayerWrapper>
          <S.Title>{title}</S.Title>
          <S.Year>{year}</S.Year>
        </S.DetailLayerWrapper>
      </S.DetailLayer>
    </S.MovieCard>
  )
}
