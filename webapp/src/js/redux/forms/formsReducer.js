import ACTIONS from '../../constants/ACTIONS'

const initialState = {
    formData: {},
    formErrors: {}
}

export default function formsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.UPDATE_FORM_FIELD:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    [action.field]: action.value
                }
            }

        case ACTIONS.UPDATE_FORM_FIELDS:
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.fields
                }
            }

        case ACTIONS.INIT_FORM:
            return {
                ...state,
                formData: action.formData
            }

        case ACTIONS.CLEAR_FORM:
            return {
                ...state,
                formData: {}
            }

        case ACTIONS.SET_FORM_ERRORS:
            return {
                ...state,
                formErrors: {
                    ...state.formErrors,
                    ...action.formErrors
                }
            }

        case ACTIONS.CLEAR_FORM_ERRORS:
            return {
                ...state,
                formErrors: {}
            }
        default:
            return { ...state }
    }
}
