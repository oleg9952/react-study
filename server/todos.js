const { nanoid } = require('nanoid')

let todos = []

const addTodo = (todo) => {
    todos.push({
        id: nanoid(),
        ...todo
    })
}

const toggle = (id) => {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = !todo.done
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