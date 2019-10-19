import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

export const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

function configureStore(initialState) {
    const store = createStore(reducer(history), initialState, composeEnhancers(applyMiddleware(thunk)))
    return store
}

export const store = configureStore()
