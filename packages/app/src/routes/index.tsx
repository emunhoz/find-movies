import React, { lazy, Suspense } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import { Loading } from '@monorepo/ui-components'

const Home = lazy(() => import('../pages/home/Home'))
const Details = lazy(() => import('../pages/details/Details'))

function Routes () {
  return (
    <Suspense fallback={<Loading />}>
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/:id' component={Details} />
        </Router>
    </Suspense>
  )
}

export default Routes