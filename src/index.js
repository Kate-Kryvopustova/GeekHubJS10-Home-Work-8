import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';
import todoItems from './mocks/initialTodoList';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const inputRef = useRef();
  const [name, setName] = useState('');
  const [list, setList] = useState(todoItems);
  
  useEffect(() => {
    inputRef.current.focus();
  }, [list])

  const handleChange = event => {
    setName(event.target.value);
  };

  const addTodo = () => {
    const newList = [
      ...list,
      {
        id: uuidv4(),
        value: name,
        isDone: false
      }
    ];
    setList(newList);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (!name.trim()) return;
    if (!name) return;
    addTodo();

    setName('');
  }

  const handleDelete = id => {
    const newList = list.filter(item => item.id !== id);
    
    setList(newList);
  }

  const toggleTodoItem = id => {
    const newList = list.map(item => {
      if(item.id === id) {
        return {
          ...item,
          isDone: !item.isDone
        };
      } 
      
      return item
    });

    setList(newList);
  }

  return (
    <div id="main">
      <h1 className='title'>Todo list</h1>
      <TodoForm
        name={name}
        onChange={handleChange}
        onSubmit={onSubmit}
        inputRef={inputRef}
      />
      <TodoList
        list={list}
        handleDelete={handleDelete}
        toggleTodoItem={toggleTodoItem}
      />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);