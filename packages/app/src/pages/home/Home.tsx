import { useState } from 'react'
import { Layout, SearchBar, MovieCard, Loading, EmptyStateWrapper } from '@monorepo/ui-components'
import { Logo } from '@commons/images'
import { findMoviesByName } from '../../services/movies'
import * as S from './Home.style'

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
      <S.Logo src={Logo} alt="logo" />
      <SearchBar placeholder="Search movies..." labelName="Search" value={form.search} onChange={handleSubmit} />
      <S.Main>
        {loading && <Loading />}
        {!loading && !error && Object.keys(data).length && (
          <S.MovieWrapper>
            {data?.search?.map((item: any, key: string | number | null | undefined) => (
              <MovieCard key={key} title={item.title} year={item.year} imgUrl={item.poster} />
            ))}
          </S.MovieWrapper>)}

        {!loading && error && <EmptyStateWrapper />}

        {!loading && Object.keys(data).length === 0 && <EmptyStateWrapper />}
      </S.Main>
    </Layout>
  )
}

export default Home
