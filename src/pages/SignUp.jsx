import React from 'react'

export default function SignUp() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label className="label" htmlFor="firstname">First Name</label>
          <input id="firstname" type="text" name="firstname" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="lastname">Last Name</label>
          <input id="lastname" type="text" name="lastname" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">Email</label>
          <input id="email" type="text" name="email" />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="username">Password</label>
          <input id="" type="text" name="email" />
        </div>
        <div>
          <button type="submit">
            <span>sign up</span>
          </button>
        </div>
      </form>
    </div>
  )
}