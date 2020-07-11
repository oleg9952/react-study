import React from 'react'
import { useObserver } from 'mobx-react'
import { useAppContext } from '../mobx/appContext'

const Todo = ({ todo }) => {
    const { markDone, removeTodo } = useAppContext();
    return useObserver(() => (
        <div style={classes.todo}>
            <p>{ todo.text }</p>
            <p>Status: { todo.completed ? '+' : '-' }</p>
            <button
                onClick={() => markDone(todo.id)}
            >toggle</button>
            <button 
                onClick={() => removeTodo(todo.id)}
            >Remove</button>
        </div>
    ))
}

const classes = {
    todo: {
        padding: '0 0 0 5px',
        minHeight: '50px',
        margin: '10px 0',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 60px 70px',
        alignItems: 'center',
        boxShadow: '0 0 5px -2px #000'
    }
}

export default Todo
