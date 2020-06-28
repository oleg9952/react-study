import React from 'react';
import Note from './Note';
import Spinner from './Spinner/Spinner'

const Notes = (props) => {
    return (
        <div className="notes">
            {
                props.fireBaseNotes.length !== 0 ?
                props.fireBaseNotes.map(note => {
                    return (<Note
                        key={note.id}
                        note={note}
                        removeNote={props.removeNote}
                    />)
                }) : ''
            }
        </div>
    )
}

export default Notes;