/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { Switch, Route, Redirect } from 'react-router-dom'

import NotFoundPage from 'containers/NotFoundPage/Loadable'
import LoginPage from 'containers/LoginPage/Loadable'
import Dashboard from 'containers/Dashboard/Loadable'
import ProductPage from 'containers/ProductPage/Loadable'

import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalStyle, { colors } from '../../global-styles'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${colors.primary};
`

export default function App() {
  const isLoggedIn = localStorage.getItem('session')
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppWrapper className="custom">
        <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Chijeu">
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/dashboard">
            {isLoggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/products" component={ProductPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </AppWrapper>
    </QueryClientProvider>
  )
}
