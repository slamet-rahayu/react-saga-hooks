import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="username">Email</label>
          <input id="username" type="text" name="username" className="input" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">Password</label>
          <input id="password" type="text" name="password" className="input" />
        </div>
        <div>
          <button type="submit" className="button">
            <span>Login</span>
          </button>
        </div>
      </form>
    </div>
  )
}