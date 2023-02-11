export function validateEmail (email) {
  const regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/
  return regexEmail.test(email)
}

export function validateForm (e) {
  const { name, value } = e.target

  return new Promise((resolve, reject) => {
    if (name === 'email') {
      if (!value.trim()) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ code: 'email', message: 'Enter your email' })
      } else if (!validateEmail(value)) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ code: 'email', message: 'Invalid email. Example: name@example.com' })
      }
    }

    if (name === 'password') {
      if (!value.trim()) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ code: 'password', message: 'Enter your password' })
      }
    }
    resolve(true)
  })
}
