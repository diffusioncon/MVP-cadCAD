import React, { Component } from 'react'
import './LoadingPage.css'

export default class PageLoader extends Component {
    render() {
        return (
            <div style={{ zIndex: 10000000, position: 'relative', margin: '0 auto', textAlign: 'center', ...this.props.style }}>
                <h3>Loading...</h3>
            </div>
        )
    }
}
