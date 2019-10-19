import ACTIONS from '../../constants/ACTIONS'
import userService from '../../services/user-service'
// import { replace } from 'react-router-redux'

export { loginUser, registerUser, logoutUser }

function loginUser(email, password) {
    return async dispatch => {
        try {
            const userData = await userService.loginUser(email, password)
            const account = userData.data.account
            if (account.token) {
                localStorage.setItem('user', JSON.stringify(account))
            }
            dispatch(loginUserSuccess(account))
        } catch (error) {
            // console.log('error', error)
        }
    }
}

function loginUserSuccess(userData) {
    return { type: ACTIONS.USER_LOGIN, userData }
}

function registerUser(email, password, firstName, lastName) {
    return async dispatch => {
        try {
            const userData = await userService.registerUser(email, password, firstName, lastName)
            const account = userData.data.account
            if (account.token) {
                localStorage.setItem('user', JSON.stringify(account))
            }
            dispatch(registerUserSuccess(account))
        } catch (error) {
            // console.log('error', error)
        }
    }
}

function registerUserSuccess(userData) {
    return { type: ACTIONS.USER_REGISTER, userData }
}

function logoutUser() {
    return async dispatch => {
        userService.logoutUser()
        dispatch(logoutUserSuccess())
        // dispatch(replace('/'))
    }
}

function logoutUserSuccess() {
    return { type: ACTIONS.USER_LOGOUT }
}
