import React, { useState, useEffect } from 'react';
import Firebase from './config';
import './App.css';

import Header from './Components/Header';
import Notes from './Components/Notes';
import AddNote from './Components/AddNote';
import Form from './Components/Form';
import AccountPage from './Components/AccountPage';

const App = () => {

  // ------- FIREBASE -------

  const db = Firebase.firestore();
  const auth = Firebase.auth();

  // ------- STATE -------

  const [ fireBaseNotes, setFireBaseNotes ] = useState([]);
  const [ formStatus, setFormStatus ] = useState(false);
  const [ accountPageStatus, setAccountPageStatus ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState(null)

  // ------- TRIGGERS -------

  const formTrigger = () => {
    setFormStatus(!formStatus)
  }

  const accountPageTrigger = () => {
    setAccountPageStatus(!accountPageStatus)
  }

  // ******************** AUTHENTICATION ********************

  const logIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(resp => {
        setFormStatus(!formStatus)
      })
      .catch(err => console.error(`Log In error: ${err}`))
  }

  const registerNewAccount = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(resp => {
        setCurrentUser(resp.user.email)
        setFormStatus(!formStatus)
      })
      .catch(err => console.error(`Registration error: ${err}`))
  }

  const signOut = () => {
    auth.signOut()
      .then(() => {
        setCurrentUser(null)
        setFireBaseNotes([])
      })
      .catch(err => console.error(`Error: ${err}`))
  }

  // ******************** FIRESTORE ********************
  // ------- ADD NOTE -------

  const sendNote = (note) => {
    let newNote = {
      order: fireBaseNotes.length === 0 ? 1 : fireBaseNotes[fireBaseNotes.length - 1].order + 1,
      message: note
    }

    db.collection(currentUser)
      .add(newNote)
      .catch(err => console.error(`Error: ${err}`))
  }

  // ------- GET NOTES -------

  const getNotes = (email) => {
    db.collection(email)
      .get()
      .then(resp => {
        let receivedNotes = []
        resp.docs.forEach(doc => {
          let receivedNote = {
            id: doc.id,
            order: doc.data().order,
            message: doc.data().message
          }
          receivedNotes.push(receivedNote);
        })
        
        let compare = (a, b) => {
          const orderA = a.order;
          const orderB = b.order;
          let comparison = 0;
          if(orderA > orderB) {
            comparison = 1;
          } else if(orderA < orderB) {
            comparison = -1;
          }
          return comparison;
        }

        let sortedNotes = receivedNotes.sort(compare);

        setFireBaseNotes(sortedNotes)
      })
  }

  // ------- REMOVE NOTE -------

  const removeNote = (id) => {
    db.collection(currentUser)
      .doc(id)
      .delete()
      .then(() => getNotes(currentUser))
  }

  // ------- LIVE NOTES UPDATE ON AUTH STATUS -------

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        setCurrentUser(user.email)
        db.collection(user.email).onSnapshot(() => {
          getNotes(user.email)
        })
      } else {
        setCurrentUser(null)
      }
    })
  }, [])
  // db.collection(currentUser).onSnapshot(() => {
  //   console.log('db live changed')
  // })
  



  return (
    <div className="app">
      <AccountPage 
        accountPageStatus={accountPageStatus}
        // trigger
        accountPageTrigger={accountPageTrigger}
        // user info
        currentUser={currentUser}
      />
      <Header 
        currentUser={currentUser}
        // triggers
        formTrigger={formTrigger}
        accountPageTrigger={accountPageTrigger}
        // authentication
        signOut={signOut}
      />
      <Form 
        // show && hide form
        formStatus={formStatus}
        formTrigger={formTrigger}
        // authentication
        logIn={logIn}
        registerNewAccount={registerNewAccount}
      />
      <Notes 
        fireBaseNotes={fireBaseNotes}
        removeNote={removeNote}
      />
      {
        currentUser !== null ? (
          <AddNote
            sendNote={sendNote}
          />
        ) : ''
      }
    </div>
  );
}

export default App;
