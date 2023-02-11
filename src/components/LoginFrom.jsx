import React, { useState } from 'react'
export function LoginForm () {
  return (
            <section className='container__login'>
            <form className="d-grid gap-2 col-9 mx-auto" >{/* onSubmit={}  */}
            <label htmlFor="formEmailInput" className="form-label text-white">Email
            </label>
              <input type="text" className="form-control form-input" placeholder="name@example.com" name='email'/>
              <label htmlFor="formPasswordInput" className="form-label text-white">Password
              </label>
              <input type="password" className="form-control form-input" placeholder="********" name='password'/>
              <div className="d-grid gap-3 col-12 mx-auto">
              <button type="submit" className="btn btn-primary btn-lg btn-login ">Login
              </button>
              </div>
            </form>
            </section>

  )
}
