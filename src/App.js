import React from 'react';
import './App.scss';
import { useAppContext } from './mobx/appContext';
import { useObserver } from 'mobx-react'
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const store = useAppContext();
  return useObserver(() => (
    <div className="App">
      <Form />
      <div className="todos">
        { 
          store.todos.length ? 
          store.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          )) : <p>No todos...</p>
        }
      </div>
      
    </div>
  ));
}

export default App;
