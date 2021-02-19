import { useState } from 'react'
import { Layout, SearchBar, MovieCard, Loading, EmptyStateWrapper } from '@monorepo/ui-components'
import { Logo } from '@commons/images'
import { findMoviesByName } from '../../services/movies'
import * as S from './Home.style'
import { Link } from 'react-router-dom'

function Home() {
  const [form, setForm] = useState({ search: "" })
  const [data, setData] = useState<any>({})
  const [error, setError] = useState(false)
  const [loading, setloading] = useState(false)

  async function handleSubmit(e: { preventDefault: () => void; target: { value: any } }) {
    e.preventDefault()

    setForm({ search: e.target.value })

    if (e.target.value.length < 3) {
      setData({})
      return
    }

    try {
      setloading(true)
      const { data } = await findMoviesByName(e.target.value)
      setData(data)
      setError(data?.error)
    } catch (error) {
      console.log(error)
    } finally {
      setloading(false)
    }
  }

  return (
    <Layout>
      <S.Logo src={Logo} alt="logo" width="112" height="32" />
      <SearchBar placeholder="Search movies..." labelName="Search" value={form.search} onChange={handleSubmit} />
      <S.Main>
        {loading && <Loading />}
        {!loading && !error && Object.keys(data).length > 0 && (
          <S.MovieWrapper>
            {data?.search?.map((item: { imdbId: string, title: string, year: string, poster: string }, key: string | number | null | undefined) => (
              <Link to={`/${item.imdbId}`} key={key}>
                <MovieCard title={item.title} year={item.year} imgUrl={item.poster} />
              </Link>
            ))}
          </S.MovieWrapper>)}

        {!loading && error && <EmptyStateWrapper />}

        {!loading && Object.keys(data).length === 0 && <EmptyStateWrapper />}
      </S.Main>
    </Layout>
  )
}

export default Home
