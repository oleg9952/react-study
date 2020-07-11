import React, { useState } from 'react'
import Button from './Button';
import { useAppContext } from '../mobx/appContext';

const Form = ({ placeholder }) => {
    const { addTodo } = useAppContext();
    const [ input, setInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inp = input;
        if (!inp.trim().length || !inp.length) return
        addTodo(input)
        setInput('')        
    } 

    return (
        <form style={classes.form} onSubmit={handleSubmit}>
            <input 
                style={classes.input}
                type="text" 
                name="text"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={placeholder ? placeholder : '...'}
            />
            <button 
                type="submit" 
                styles={{
                    backgroundColor: 'lightgreen',
                    color: '#000'
                }}
            >Add</button>
        </form>
    )
}

const classes = {
    form: {
        width: '300px',
        display: 'grid',
        gridTemplateColumns: '1fr 60px',
        marginBottom: '10px'
    },
    input: {
        height: '40px',
        outline: 'none',
        padding: '0 10px',
        fontSize: '18px'
    }
}

export default Form
