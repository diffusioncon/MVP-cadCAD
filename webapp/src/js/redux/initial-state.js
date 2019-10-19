let user = localStorage.getItem('user')
if (user) {
    user = JSON.parse(user)
} else {
    user = {}
}

export const initialState = {
    global: {
        user,
        formData: {}
    }
}
