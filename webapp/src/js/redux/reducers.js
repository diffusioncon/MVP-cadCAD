import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import formsReducer from './forms/formsReducer'
import userReducer from './user/userReducer'

export default history =>
    combineReducers({
        router: connectRouter(history),
        user: userReducer,
        forms: formsReducer
    })
