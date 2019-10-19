import axios from 'axios'

export default {
    initInterceptors
}

let token
function initInterceptors() {
    axios.interceptors.request.use(
        async req => {
            const newRequest = { ...req }
            try {
                const storage = JSON.parse(localStorage.getItem('user'))
                if (storage != null) {
                    if (token !== storage.token) token = storage.token
                    newRequest.headers = {
                        ...newRequest.headers,
                        authorization: `Bearer ${storage.token}`
                    }
                }
            } catch (err) {
                //   logger.err(err)
            }
            return newRequest
        },
        error => Promise.reject(error)
    )
}
