import { nanoid } from 'nanoid';

export const createTodosStore = () => {
    return {
        todos: [
            {
                id: 0,
                text: 'ldadkas laksdlas.',
                completed: false
            }
        ],

        addTodo(text) {
            this.todos.push({
                id: nanoid(),
                text,
                completed: false
            })
        },
        markDone(id) {
            this.todos.forEach(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    
                }
            })
        },
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    }
}