import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
import { createBrowserHistory } from 'history'
import { Router, Redirect, Switch, Route } from 'react-router-dom'
import { BondeSessionProvider, BondeSessionUI } from 'bonde-core-tools'
import { Loading } from 'bonde-components'
// import { ProviderRedux } from './services/redux'
// Routes
// import Dashboard from './scenes/Dashboard'
// import { Root as AuthRoot } from './scenes/Auth'
import HomePage from 'scenes/HomePage'
import CommunityPage from 'scenes/CommunityPage'
// import SettingsPage from './scenes/Dashboard/scenes/Settings'
// import TagsPage from './scenes/Dashboard/scenes/Tags'
// import InvitationsPage from './scenes/Dashboard/scenes/Invitations'
import { NotFound, ResponsiveUI } from 'components'
// Styles
import 'react-toastify/dist/ReactToastify.css'

const TextLoading = ({ fetching }) => {
  const messages = {
    session: 'Carregando sessão...',
    user: 'Carregando usuário...',
    communities: 'Carregando communities...',
    redirect: 'Redirecionando para autenticação...'
  }
  return <Loading fullsize message={messages[fetching]} />
}

TextLoading.propTypes = {
  fetching: PropTypes.string.isRequired
}

BondeSessionProvider.displayName = 'BondeSessionProvider'

const history = createBrowserHistory()

const Root = () => (
  <BondeSessionProvider
    fetchData
    environment={process.env.REACT_APP_ENVIRONMENT || 'development'}
    loading={TextLoading}
  >
    <Router history={history}>
      <BondeSessionUI.Main indexRoute='/'>
        <ToastContainer
          className='BondeToastify'
          hideProgressBar={true}
        />
        <ResponsiveUI>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/community' component={CommunityPage} />
            <Redirect from='/admin' to='/' />
            <Route component={NotFound} />
          </Switch>
        </ResponsiveUI>
      </BondeSessionUI.Main>
    </Router>
  </BondeSessionProvider>
)

export default Root
