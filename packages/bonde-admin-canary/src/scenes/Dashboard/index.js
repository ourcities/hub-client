import React from 'react'
import PropTypes from 'prop-types'
import { AuthProvider } from 'services/auth'
import { PageLayout, TutorialPageLayout } from 'services/router'
import { LoadingFullScreen } from 'components/Loadable'
import { CommunityPageLayout, Page } from './components'
import HomePage from './scenes/Home'
import TagsPage from './scenes/Tags'
import SettingsPage from './scenes/Settings'


const Dashboard = ({ match }) => {
  return (
    <AuthProvider loading={LoadingFullScreen}>
      <TutorialPageLayout
        exact
        path={match.path}
        component={HomePage}
        pageProps={{
          title: 'Inicio',
          wrapperHeaderComponent: HomePage.Header
        }}
      />
      <PageLayout path={`${match.path}/tags`} component={TagsPage} />
      {/* Community Context */}
      <CommunityPageLayout
        exact
        path={`${match.path}/:communityId/report`}
        component={Page}
        loading={LoadingFullScreen}
        pageProps={{ title: 'Dados' }}
        componentProps={{ title: 'Dados' }}
      />
      <CommunityPageLayout
        exact
        path={`${match.path}/:communityId/chatbot`}
        component={Page}
        loading={LoadingFullScreen}
        pageProps={{ title: 'Chatbot' }}
        componentProps={{ title: 'Chatbot' }}
      />
      {/* Configurações de comunidade */}
      <CommunityPageLayout
        path={`${match.path}/:communityId/settings`}
        component={SettingsPage}
        loading={LoadingFullScreen}
        pageProps={{ title: 'Configurações' }}
        tabs={[
          { path: /^\/admin\/\d+\/settings$/, name: 'Informações', to: '' },
          { path: /^\/admin\/\d+\/settings\/invite$/, name: 'Mobilizadores', to: '/invite' },
          { path: /^\/admin\/\d+\/settings\/domain$/, name: 'Domínios', to: '/domain' },
          { path: /^\/admin\/\d+\/settings\/integration$/, name: 'Integrações', to: '/integration' },
          { path: /^\/admin\/\d+\/settings\/recipient$/, name: 'Financeira', to: '/recipient' },
        ]}
      />

    </AuthProvider>
  )
}

const { any } = PropTypes

Dashboard.propTypes = {
  match: any
}

export default Dashboard
