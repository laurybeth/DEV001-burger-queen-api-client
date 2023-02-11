import React, { useState } from 'react'
import { validateEmail, validateForm } from '../controllers/login-controller'

const initialForm = {
  id: null,
  email: '',
  password: ''
}

export function LoginForm () {
  const [form, setForm] = useState(initialForm)
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')

  function handleSubmit (e) {
    e.preventDefault()
    console.log(form)
  }

  function handleChange (e) {
    validateForm(e)
      .then(
        setForm(
          {
            ...form,
            [e.target.name]: e.target.value
          }
        ))
      .catch((error) => {
        if (error.code === 'email') {
          setErrorEmail(error.message)
        }

        if (error.code === 'password') {
          setErrorPassword(error.message)
        }
      })
  }

  return (
            <section className='container__login'>
            <form className="d-grid gap-2 col-9 mx-auto" onSubmit={handleSubmit} >
              <div className='container-input'>
              <label htmlFor="email" className="form-label text-white">Email
              </label>
              <input type="text" className="form-control form-input" name='email' placeholder="name@example.com" onChange={handleChange}/>
              <p className='errorMessage'>{errorEmail}</p>
              </div>
              <div className='container-input'>
              <label htmlFor="password" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input " name='password' placeholder="********" onChange={handleChange} />
              <p className='errorMessage'>{errorPassword}</p>
              </div>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
