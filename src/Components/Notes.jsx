import React, { Component } from 'react'

import Note from './Note'
//import NoNotes from './Notes'

export class Notes extends Component {
    render() {  
        return (
            <div className="notes">
                {
                    this.props.fireBaseNotes == undefined ? 
                      
                    ''
              
                    :
                    
                    this.props.fireBaseNotes.map(note => (
                        <Note 
                            key={note.id}
                            note={note}
                            removeNote={this.props.removeNote}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Notes
