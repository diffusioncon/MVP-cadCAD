import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './js/components/App'
import ScrollToTop from './js/components/atoms/ScrollToTop/ScrollToTop'
import { history, store } from './js/redux/store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)
