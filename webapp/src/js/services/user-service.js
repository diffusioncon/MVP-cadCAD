import axios from 'axios'

const userService = {
    loginUser,
    registerUser,
    getUserData,
    logoutUser
}

function getUserData() {
    return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`)
}

function loginUser(email, password) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
        email,
        password
    })
}

function registerUser(email, password, firstName, lastName) {
    return axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/users/register`, {
        email,
        password,
        firstName,
        lastName
    })
}

function logoutUser() {
    localStorage.removeItem('user')
}

export default userService
