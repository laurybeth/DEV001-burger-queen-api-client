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

  async function handleSubmit (e) {
    e.preventDefault()

    await validateForm(form)
    try {
      const response = await httpRequest().post('http://localhost:8080/login', {
        body: form
      })
      try {
        // mensaje de error
        if (!response.error) {
          toast.success('Success')
          link('/waiterPanel')
        } else {
          toast.error('Please enter valid credentials')
        }
      } catch (error) {
        console.log('Error: ', error.message)
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
              <p className='error-message'>{errorEmail}</p>
              </div>
              <div className='container-input'>
              <label htmlFor="password" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input " id = 'password' name='password' placeholder="********" onChange = {handleChange} onBlur={handleBlur} />
              <p className='error-message'>{errorPassword}</p>
              </div>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
