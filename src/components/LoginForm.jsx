import React, { useState } from 'react'
import { validateEmail } from '../controllers/login-controller'

const initialForm = {
  id: null,
  email: '',
  password: ''
}

export function LoginForm () {
  const [form, setForm] = useState(initialForm)
  const [warning, setWarning] = useState('')

  function handleSubmit (e) {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  function handleChange (e) {
    const email = e.target.value
    if (!validateEmail(email)) {
      setWarning('The format does not match what was requested. Example: name@example.com')
    }
  }

  return (
            <section className='container__login'>
            <form className="d-grid gap-2 col-9 mx-auto" onSubmit={handleSubmit} >
              <div className='container-input'>
              <label htmlFor="email" className="form-label text-white">Email
              </label>
              <input type="text" className="form-control form-input" name='email' placeholder="name@example.com" onChange={handleChange}/>
              <p className='errorMessage'>{warning}</p>
              </div>
              <div className='container-input'>
              <label htmlFor="password" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input " name='password' placeholder="********" />
              <p>{}</p>
              </div>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
