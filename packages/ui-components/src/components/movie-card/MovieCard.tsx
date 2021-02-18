import React, { useState } from 'react'
import { IconHeartWhite, IconHeartFull, ImageNotFound } from '@commons/images'
import * as S from './MovieCard.style'

interface IMovieCard {
  imgUrl?: string
  title: string
  year: string
}

export const MovieCard = ({ imgUrl, title, year }: IMovieCard) => {
  const [active, setActive] = useState(false)
  const imgCard = imgUrl === 'N/A' ? ImageNotFound : imgUrl
  const activeImage = active ? IconHeartFull : IconHeartWhite

  return (
    <S.MovieCard>
      <S.Img src={imgCard} alt={title} />
      <S.DetailLayer asFav={active!}>
        <S.IconWrapper>
          <img src={activeImage} width="24" height="24" data-testid="set-as-fav" onClick={(e) => {
            e.preventDefault()
            setActive(!active)
          }}/>
        </S.IconWrapper>
        <S.DetailLayerWrapper>
          <S.Title>{title}</S.Title>
          <S.Year>{year}</S.Year>
        </S.DetailLayerWrapper>
      </S.DetailLayer>
    </S.MovieCard>
  )
}
