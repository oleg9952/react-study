import React, { useRef } from 'react'

const SignUpForm = (props) => {
  
    const userEmail = useRef(null)
    const userPass = useRef(null)
  
    const handleSignUp = (e) => {
      e.preventDefault()
      let email = userEmail.current.value
      let password = userPass.current.value
      props.signUpNewUser(email, password)
      userEmail.current.value = null
      userPass.current.value = null
    }

    return (
        <form className={ props.signUpFormToggle ? 'form active' : 'form' } onSubmit={handleSignUp}>
            <h2>Create an account</h2>
            <input ref={userEmail} type="email" name="email" placeholder="Enter your email" required />
            <input ref={userPass} type="password" name="password" placeholder="Enter your password" required />
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignUpForm