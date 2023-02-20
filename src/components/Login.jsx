import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateForm } from '../utils/validate'
import { httpRequest } from '../fetch-api/httpRequest'
import { toast } from 'react-toastify'

const initialForm = {
  id: null,
  email: '',
  password: ''
}

export function Login () {
  const link = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errorEmail, setErrorEmail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  // console.log('Logged', AuthContext)

  async function handleSubmit (e) {
    e.preventDefault()

    try {
      await validateForm(form)

      const response = await httpRequest().post('http://localhost:8080/login', {
        body: form
      })
      console.log(response.error)
      // mensaje de error
      if (Object.prototype.hasOwnProperty.call(response, 'error')) {
        toast.error('Wrong email or password')
      } else {
        const token = response.accessToken
        const currentUser = response.user
        localStorage.setItem('accessToken', token)
        localStorage.setItem('currentUser', JSON.stringify(response.user))
        toast.success('Success')
        if (currentUser.roles.waiter) {
          link('/waiterPanel')
        }
        /*       const currentUser = [...response, response.accessToken]
        AuthContext.updateUser(currentUser) */
        // AuthContext.setLogged(true)
      }
    } catch (error) {
      if (error.code === 'email') {
        setErrorEmail(error.message)
      }
      if (error.code === 'password') {
        setErrorPassword(error.message)
      }
    }
  }

  function handleChange (e) {
    const { name, value } = e.target
    setForm(
      {
        ...form,
        [name]: value
      })
    // console.log('handle: ', form)
    if (name === 'email') {
      setErrorEmail('')
    }
    if (name === 'password') {
      setErrorPassword('')
    }
  }

  function handleBlur (e) {
    validateForm(form)
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
            <section className='container-login' data-testid="login-element">
            <form className="d-grid gap-1 col-11 mx-auto" onSubmit={handleSubmit} >
              <div className='container-input'>
              <label htmlFor="email" className="form-label text-white">Email
              </label>
              <input type="text" id = 'email' className="form-control form-input" name='email' placeholder="name@example.com" onChange = {handleChange} onBlur={handleBlur}/>
              <div className='container-error'><div className='error-message'>{errorEmail}
              </div></div>
              </div>
              <div className='container-input'>
              <label htmlFor="password" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input " id = 'password' name='password' placeholder="********" onChange = {handleChange} onBlur={handleBlur} />
              <div className='container-error'><div className='error-message'>{errorPassword}
              </div></div>
              </div>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
