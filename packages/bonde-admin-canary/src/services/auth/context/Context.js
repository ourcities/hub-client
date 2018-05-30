import React from 'react'
import { Loading } from 'bonde-styleguide'
import { Query } from 'react-apollo'
import CURRENT_USER from './currentUser.graphql'

export const AuthContext = React.createContext()

const getUser = ({ currentUser }) => ({
  ...currentUser,
  tags: JSON.parse(currentUser.tags).filter(t => {
    if (typeof t === 'string') return true
    else return false
  })
})

const AuthProvider = ({ children }) => (
  <Query query={CURRENT_USER}>
    {({ loading, error, data }) => {
      
      if (loading) return <Loading />
      
      if (error) console.log('error', error)

      return (
        <AuthContext.Provider value={(data ? getUser(data) : undefined)}>
          {children}
        </AuthContext.Provider>
      )
    }}
  </Query>
)

export default AuthProvider
