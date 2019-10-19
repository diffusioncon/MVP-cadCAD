import ACTIONS from '../../constants/ACTIONS'
import userService from '../../services/user-service'

export { getUserData }

function getUserData() {
    return async dispatch => {
        try {
            const userData = await userService.getUserData()
            const account = userData.data
            if (!account) {
                localStorage.removeItem('user')
            } else {
                if (account.token) {
                    localStorage.setItem('user', JSON.stringify(account))
                }
                dispatch(loginUserSuccess(account))
            }
        } catch (error) {
            // console.log('error', error)
        }
    }
}

function loginUserSuccess(userData) {
    return { type: ACTIONS.USER_LOGIN, userData }
}
