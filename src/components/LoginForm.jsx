import React, { useState } from 'react'

const initialForm = {
  id: null,
  email: '',
  password: ''
}

export function LoginForm () {
  const [form, setForm] = useState(initialForm)

  function handleSubmit (e) {
    setForm(
      {
        ...form,
        [e.target.name]: e.target.value
      }
    )
  }

  function handleChange (e) {

  }

  return (
            <section className='container__login'>
            <form className="d-grid gap-2 col-9 mx-auto" onSubmit={handleSubmit} >{/*  */}
            <label htmlFor="formEmailInput" className="form-label text-white">Email
            </label>
              <input type="text" className="form-control form-input" name='email' placeholder="name@example.com" onChange={handleChange} value={form.email}/>
              <label htmlFor="formPasswordInput" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input" name='password' placeholder="********" onChange={handleChange} value={form.password}/>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
