import React, { useState, useEffect } from 'react';
import Firebase from './db_config.js'
import './App.css';

import Header from './Components/UI/Header';
import Content from './Components/UI/Content';

const App = () => {
  //---------- DB ----------
  
  //const db = Firebase.firestore()
  const auth = Firebase.auth()
  
  //---------- State ----------
  
  const [ signInFormToggle, setSignInFormToggle ] = useState(false)
  const [ signUpFormToggle, setSignUpFormToggle ] = useState(false)
  
  const [ signInStatus, setSignInStatus ] = useState(false)
  
  const [ currentUser, setCurrentUser ] = useState(null)
  
  const [ errorEmail, setErrorEmail ] = useState(null)
  const [ errorPass, setErrorPass ] = useState(null)

  //---------- Toggle Forms ----------
  
  const signIn = () => {
    if(signInFormToggle === false) {
      setSignInFormToggle(!signInFormToggle)
      setSignUpFormToggle(false)
    } else {
      setSignInFormToggle(!signInFormToggle)
      setSignUpFormToggle(false)
    }
  }

  const signUp = () => {
    if(signUpFormToggle === false) {
      setSignUpFormToggle(!signUpFormToggle)
      setSignInFormToggle(false)
    } else {
      setSignUpFormToggle(!signUpFormToggle)
      setSignInFormToggle(false)
    }
  }
  
  //---------- Auth listener ----------
  
  auth.onAuthStateChanged(user => {
    if(user) {
      setSignInStatus(true)
      setCurrentUser(user.email)
    } else {
      setSignInStatus(false)
      setCurrentUser('username')
    }
  })
  
  //---------- Sign Up / Sign In / Sign out ----------
  const signUpNewUser = (e, p) => {
    auth.createUserWithEmailAndPassword(e, p)
      .then(resp => {
        console.log(resp)
        setSignUpFormToggle(false)
      })
      .catch(err => {
        if(err.code === 'auth/weak-password') {
           setErrorPass('Password is too weak!')
           console.log('Password is too weak!')
        } else if(err.code === 'auth/invalid-email') {
          setErrorEmail('Invalid email!')
          console.log('Invalid email!')
        } else {
          console.log(err.code)
        }
      })
  }
  
  const signInUser = (e, p) => {
    auth.signInWithEmailAndPassword(e, p)
      .then(resp => {
        setSignInFormToggle(false)
      })
      .catch(err => {
        if(err.code === 'auth/wrong-password') {
          setErrorPass('Wrong password!')
          console.log(errorPass)
        } else if(err.code === 'auth/user-not-found') {
          setErrorEmail('No user found!')
          console.log('No user found!')
        } else {
          console.log(err.code)
        }     
      })
  }  
   
  const signOutUser = () => {
    auth.signOut()
      .then(() => console.log(`${currentUser} signed out`))
      .catch(err => console.error(`Error: ${err}`))
  }
  
  //---------- Account details ----------
  
  const userAccountDetails = () => {
    console.log('account')
  }
  
  //-------------------------------
  
  return (
    <div className="App">
      <Header
        // form togglers
        signIn={signIn}
        signUp={signUp}
        signOutUser={signOutUser}
        signInStatus={signInStatus}
        userAccountDetails={userAccountDetails}
        currentUser={currentUser}
      />
      
      <Content
        // form togglers
        signInFormToggle={signInFormToggle}
        signUpFormToggle={signUpFormToggle}
        // auth actions
        signUpNewUser={signUpNewUser}
        signInUser={signInUser}
        // auth status
        signInStatus={signInStatus}
        // error handling
        errorEmail={errorEmail}
        errorPass={errorPass}
      />
    </div>
  );
}

export default App;
