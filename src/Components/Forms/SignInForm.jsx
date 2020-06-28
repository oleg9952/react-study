import React, { useRef } from 'react'

const SignInForm = (props) => {
  
    const userEmail = useRef(null)
    const userPass = useRef(null)
    
    const styleEmail = {
      border: props.errorEmail !== null ? '3px solid red' : '3px solid #ababab'
    }
    const stylePass = {
      border: props.errorPass !== null ? '3px solid red' : '3px solid #ababab'
    }
    
    const handleSignIn = (e) => {
      e.preventDefault()
      props.signInUser(userEmail.current.value, userPass.current.value)
      userEmail.current.value = null
      userPass.current.value = null
    }
  
    return (
        <form className={ props.signInFormToggle ? 'form active' : 'form' } onSubmit={handleSignIn}>
            <h2>Sign In to your account</h2>
            <input ref={userEmail} type="email" name="email" placeholder="Enter your email" style={ styleEmail } required />
            <input ref={userPass} type="password" name="password" placeholder="Enter your password" style={ stylePass } required />
            <button type="submit">Sign In</button>
        </form>
    )
}

export default SignInForm