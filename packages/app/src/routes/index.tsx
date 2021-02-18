import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Loading } from '@monorepo/ui-components'

const Home = lazy(() => import('../pages/home/Home'))

function Routes () {
  return (
    <Suspense fallback={<Loading />}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={() => <h1>Detalhes</h1>} />
        </Router>
    </Suspense>
  )
}

export default Routes