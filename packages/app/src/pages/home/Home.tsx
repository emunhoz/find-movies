import { Layout, SearchBar } from '@monorepo/ui-components'
import { Logo, EmptyState } from '@commons/images'
import * as S from './Home.style'

function Home() {
  return (
    <Layout>
      <S.Logo src={Logo} alt="logo" />
      <SearchBar placeholder="Search movies..." />
      <S.Main>
        <S.EmptyStateWrapper>
          <S.EmptyStateImg src={EmptyState} alt="Empty state" />
          <S.EmptyStateTitle>Don't know what to search?</S.EmptyStateTitle>
          <S.EmptyStateSubTitle>Here's an offer you can't refuse</S.EmptyStateSubTitle>
        </S.EmptyStateWrapper>
      </S.Main>
    </Layout>
  )
}

export default Home
