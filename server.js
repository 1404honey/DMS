const registerForm = document.querySelector('#register-form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

registerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateInputs()) {
        return false
    }
    // Call your API or server-side logic here to register the user
})

function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let success = true
    if (usernameVal === '') {
        setError(username, 'Username is required')
        success = false
    } else {
        setSuccess(username)
    }
    if (emailVal === '') {
        setError(email, 'Email is required')
        success = false
    } else if (!validateEmail(emailVal)) {
        setError(email, 'Please enter a valid email')
        success = false
    } else {
        setSuccess(email)
    }
    if (passwordVal === '') {
        setError(password, 'Password is required')
        success = false
    } else if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long')
        success = false
    } else {
        setSuccess(password)
    }
    if (cpasswordVal === '') {
        setError(cpassword, 'Confirm Password is required')
        success = false
    } else if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Passwords do not match')
        success = false
    } else {
        setSuccess(cpassword)
    }
    return success
}

function setError(element, message) {
    const inputGroup = element.parentElement
    const errorMessage = inputGroup.querySelector('.error')
}  