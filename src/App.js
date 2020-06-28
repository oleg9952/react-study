import React, { Component } from 'react'
//import axios from 'axios'
//import uuid from 'uuid'
import './App.css'

//--------DB--------
import Firebase from 'firebase'
import DB_CONFIG from './config'

import Header from './Components/Header'
import Notes from './Components/Notes'
import AddNote from './Components/AddNote'

export class App extends Component {

  constructor() {
    super()

    Firebase.initializeApp(DB_CONFIG);
    this.db = Firebase.firestore();

    this.db.collection('notes').onSnapshot(() => {
      this.getNotes()
    })

    this.state = {
      fireBaseNotes: null
    }
  }

//----------------GET NOTES FOM DB----------------
  getNotes = () => {
    let receivedData = []
    this.db.collection('notes')
      .get()
      .then(resp => {
        resp.docs.forEach(doc => {

          let noteReceived = {
            id: doc.id,
            order: doc.data().order,
            message: doc.data().noteMessage
          }

          receivedData.push(noteReceived)

        })

        //-------SORTING-------

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

        let sorted = receivedData.sort(compare)

        this.setState({ fireBaseNotes: sorted })

      })
      
  }
  
//----------------SEND NOTES TO DB----------------
  sendNote = (note) => {
    //-------GET THE LAST ORDER NUMBER-------
    let receivedData = []
    this.db.collection('notes')
      .get()
      .then(resp => {
        resp.docs.forEach(doc => {

          let noteReceived = {
            id: doc.id,
            order: doc.data().order,
            message: doc.data().noteMessage
          }

          receivedData.push(noteReceived)

        })

        //-------SORTING-------

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

        let sorted = receivedData.sort(compare)

        //-------GENERATE AN INCREMENTAL ORDER TO SEND TO DB-------
        if(sorted.length == 0) {
          let newNote = {
            order: 1,
            noteMessage: note
          }
          this.db.collection('notes')
            .add(newNote)
        } else {
          let newNote = {
            order: 1 + sorted[sorted.length -1].order,
            noteMessage: note
          }
          this.db.collection('notes')
            .add(newNote)
        }
      })


    // let newNote = {
    //   order: this.state.orderIndex,
    //   noteMessage: note
    // }

    // this.db.collection('notes')
    //   .add(newNote)
  }

//----------------REMOVE NOTE FROM DB----------------
  removeNote = (id) => {
    this.db.collection('notes')
      .doc(id)
      .delete()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Notes 
          fireBaseNotes={this.state.fireBaseNotes}
          removeNote={this.removeNote}
        />
        <AddNote sendNote={this.sendNote} />
      </div>
    )
  }
}

export default App
