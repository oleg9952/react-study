import React from 'react';

const Note = (props) => {
    const { id, message } = props.note;
    return (
        <div className="note">
            <div 
                className="delNote"
                onClick={props.removeNote.bind(this, id)}
            >X</div>
            <p>{message}</p>
        </div>
    )
}

export default Note;
