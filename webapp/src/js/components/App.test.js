import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { history, store } from '../redux/store'
import App from './App'
import ScrollToTop from './atoms/ScrollToTop/ScrollToTop'

it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </ConnectedRouter>
        </Provider>,
        div
    )
    ReactDOM.unmountComponentAtNode(div)
})
