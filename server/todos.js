const { nanoid } = require('nanoid')

let todos = [
    {
        id: 1,
        name: 'testing......',
        status: false
    },
    {
        id: 2,
        name: 'Brush my teeth',
        status: false
    },
    {
        id: 3,
        name: 'Have a breakfast',
        status: false
    },
    {
        id: 4,
        name: 'Set up a todo list for the day',
        status: false
    },
    {
        id: 5,
        name: 'Complete the first item on the list',
        status: false
    }
]

const addTodo = (todo) => {
    todos.push({
        id: nanoid(),
        ...todo
    })
}

const toggle = (id) => {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.status = !todo.status
        }
    })
}

const delTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id)
}

module.exports = {
    todos: todos,
    addTodo,
    toggle,
    delTodo
}