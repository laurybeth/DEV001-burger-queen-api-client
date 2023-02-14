export function validateEmail (email) {
  const regexEmail = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/
  return regexEmail.test(email)
}

export function validateForm (form) {
  return new Promise((resolve, reject) => {
    if (!form.email.trim()) {
      reject({ code: 'email', message: 'Enter your email' })
    } else if (!validateEmail(form.email)) {
      reject({ code: 'email', message: 'Invalid email. E.g. name@example.com' })
    }
    if (!form.password.trim()) {
      reject({ code: 'password', message: 'Enter your password' })
    }
    resolve(true)
  })
}
