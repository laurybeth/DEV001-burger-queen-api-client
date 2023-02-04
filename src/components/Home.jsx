import React, { useState } from 'react'

export function Home () {
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  const valorInput = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }

  return (
    <section>
      <div>
        <h1 >SIGN IN</h1>
        <form >
          <input
          type="text"
          placeholder=" User"
            name='email'
          />
          <input
          type="password"
          placeholder="Password"
          name='password'
          />
          <button> Login</button>
        </form>
      </div>
    </section>)
}
