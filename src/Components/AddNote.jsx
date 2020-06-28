import React, { useRef } from 'react';

const AddNote = (props) => {
    let userInput = useRef('');

    const postNote = () => {
        if(userInput.current.value === '') {
            alert('You forgot to enter your note!')
        } else {
            props.sendNote(userInput.current.value)
            userInput.current.value = ''
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            postNote()
        }
    }

    return (
        <div className="addNotes">
            <div>
                <input 
                    type="text" 
                    placeholder="Type in your note..." 
                    ref={userInput} 
                    onKeyPress={handleKeyPress}
                />
                <div className="addBtn" onClick={postNote}>
                    <span>+</span>
                </div>
            </div>
        </div>
    )
}

export default AddNote;
