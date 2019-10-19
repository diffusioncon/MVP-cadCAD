import React from 'react'
import { Route } from 'react-router'
import LoadingPage from '../../pages/LoadingPage/LoadingPage'

class GuestUserRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
    }

    render() {
        const { loading } = this.state
        const { component: Component, ...rest } = this.props
        return loading ? <LoadingPage /> : <Route {...rest} component={Component} />
    }
}

export default GuestUserRoute
