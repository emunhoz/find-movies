import React, { useEffect, useState } from 'react'
import { Layout, Button, LabelWithLogo, Loading } from '@monorepo/ui-components'
import { Logo, ArrowWhite } from '@commons/images'
import { findMoviesById } from '../../services/movies'
import { useParams } from 'react-router-dom'
import { IconHeartWhite, IconHeartFull } from '@commons/images'
import Icons from '../../helpers/icons'
import * as S from './Details.style'

interface CustomParams {
  id: string
}

function Details() {
  const [details, setDetails] = useState<any>({})
  const [favourite, setFavourite] = useState<boolean>(false)
  let params = useParams()

  const imdbId = params as CustomParams

  useEffect(() => {
    getDetailData(imdbId.id)
  }, [imdbId])

  async function getDetailData(imdbId: string) {
    try {
      const { data } = await findMoviesById(imdbId)
      setDetails(data)
    } catch (error) {
      console.error(error)
    }
  }

  if (!Object.keys(details).length) {
    return <Loading />
  }

  const actors = details?.actors.split(',')
  const genres = details?.genre?.split(',')
  const directors = details?.director?.split(',')

  return (
    <Layout>
      <S.Container>
        <S.Logo src={Logo} alt="logo" width="112" height="32" />
        <S.LinkWrapper to="/"><Button aria-label="Back to home" icon={ArrowWhite} ghost size="big"></Button></S.LinkWrapper>
        <S.InfoWrapper>
          <S.Details>
            <S.Time>
              <S.LabelWithDot>{details.runtime}</S.LabelWithDot>
              <S.LabelWithDot>{details.year}</S.LabelWithDot>
              <S.Label>{details.rated}</S.Label>
            </S.Time>
            <S.MovieTitle>{details.title}</S.MovieTitle>
            <S.LabelWrapper>
              {details?.ratings?.map((item: { source: any | undefined; value: string | undefined }, key: string | number | null | undefined) => (
                <LabelWithLogo key={key} backgroundLogo={Icons[item.source].background} value={item.value} logo={Icons[item.source].img} />
              ))}
              <Button active={favourite} onClick={() => setFavourite(!favourite)} icon={favourite ? IconHeartFull : IconHeartWhite}>
                {favourite ? 'Added' : 'Add to favourites'}
              </Button>
            </S.LabelWrapper>
            <S.Infos>
              <S.BlockDescription>
                <S.SubTitle>Plot</S.SubTitle>
                <S.Text>{details.plot}</S.Text>
              </S.BlockDescription>
              <S.SubBlock>
                <S.BlockDescription>
                  <S.SubTitle>Cast</S.SubTitle>
                  <S.List>
                    {actors.map((actor: string, key: number) => (
                      <S.ListItem key={key}>{actor}</S.ListItem>
                    ))}
                  </S.List>
                </S.BlockDescription>
                <S.BlockDescription>
                  <S.SubTitle>Genre</S.SubTitle>
                  <S.List>
                    {genres.map((genre: string, key: number) => (
                      <S.ListItem key={key}>{genre}</S.ListItem>
                    ))}
                  </S.List>
                </S.BlockDescription>
                <S.BlockDescription>
                  <S.SubTitle>Director</S.SubTitle>
                  <S.List>
                    {directors.map((director: string, key: number) => (
                      <S.ListItem key={key}>{director}</S.ListItem>
                    ))}
                  </S.List>
                </S.BlockDescription>
              </S.SubBlock>
            </S.Infos>
          </S.Details>
          <S.PosterImage>
            <S.Poster loading="lazy" width="484" height="721" src={details.poster} alt={details.title} />
          </S.PosterImage>
        </S.InfoWrapper>
      </S.Container>
    </Layout>
  )
}

export default Details
