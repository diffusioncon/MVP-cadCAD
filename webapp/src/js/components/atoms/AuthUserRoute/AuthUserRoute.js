import React from 'react'
import { Route } from 'react-router'
import { withRouter } from 'react-router-dom'

import LoadingPage from '../../pages/LoadingPage/LoadingPage'

class AuthUserRoute extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    const user = localStorage.getItem('user')
    if (user) {
      this.setState({ loading: false })
    } else {
      this.props.history.replace('/')
    }
  }

  render () {
    const { loading } = this.state
    const { component: Component, ...rest } = this.props
    return loading ? <LoadingPage /> : <Route {...rest} component={Component} />
  }
}

export default withRouter(AuthUserRoute)
