import ACTIONS from '../../constants/ACTIONS'

export { initForm, clearForm, setFormErrors, updateFormField, updateFormFields }

/**
 * Initializes form data
 * @param {Object} formData - initial data for the form
 * @returns {Object} - Action
 */
function initForm(formData = {}) {
    return {
        type: ACTIONS.INIT_FORM,
        formData
    }
}

/**
 * Clears form data
 * @returns {Object} - Action
 */
function clearForm() {
    return {
        type: ACTIONS.CLEAR_FORM
    }
}

/**
 * Set errors for form fields
 * @param {Object} formErrors - errors for form fields
 */
function setFormErrors(formErrors) {
    return dispatch => {
        const timeout = setTimeout(() => {
            dispatch({ type: ACTIONS.CLEAR_FORM_ERRORS })
            clearTimeout(timeout)
        }, 5000)
        dispatch({
            type: ACTIONS.SET_FORM_ERRORS,
            formErrors
        })
    }
}

/**
 * Updates one form field
 * @param {string} field - name of the field to update
 * @param {string} value - value to update
 * @returns {Object} - Action
 */
function updateFormField(field, value) {
    return {
        type: ACTIONS.UPDATE_FORM_FIELD,
        field,
        value
    }
}

/**
 * Updates multiple form fields
 * @param {Object} field - form fields to update
 * @returns {Object} - Action
 */
function updateFormFields(fields) {
    return {
        type: ACTIONS.UPDATE_FORM_FIELDS,
        fields
    }
}
