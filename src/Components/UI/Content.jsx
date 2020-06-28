import React, { useEffect } from 'react'

import SignInForm from '../Forms/SignInForm'
import SignUpForm from '../Forms/SignUpForm'

import SignedIn from '../Content/SignedIn'
import SignedOut from '../Content/SignedOut'

const Content = (props) => {
    return (
        <div className="content">
            <SignInForm 
                signInUser={props.signInUser} 
                errorEmail={props.errorEmail}
                errorPass={props.errorPass} 
                signInFormToggle={props.signInFormToggle}
            />
            <SignUpForm 
              signUpNewUser={props.signUpNewUser} 
              signUpFormToggle={props.signUpFormToggle}
            />
            <div className="content_wrapper">
                {
                  props.signInStatus ? <SignedIn /> : <SignedOut />
                }            
            </div>
        </div>
    )
}

export default Content