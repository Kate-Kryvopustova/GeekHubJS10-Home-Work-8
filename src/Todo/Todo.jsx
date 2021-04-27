import React, { useEffect, useRef, useState } from 'react';
import './Todo.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import { initialState } from '../services/initialState';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
  const inputRef = useRef();
  const [name, setName] = useState('');
  const [list, setList] = useState(initialState);

  useEffect(() => {
    inputRef.current.focus();
  }, [list]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const addTodo = () => {
    const newList = [
      ...list,
      {
        id: uuidv4(),
        value: name,
        isDone: false,
      },
    ];
    setList(newList);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !name.trim()) {
      return;
    }

    addTodo();

    setName('');
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  const toggleTodoItem = (id) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      }

      return item;
    });

    setList(newList);
  };

  return (
    <div id='main'>
      <h1 className='title'>Todo list</h1>
      <Form
        name={ name }
        onChange={ handleChange }
        onSubmit={ onSubmit }
        inputRef={ inputRef }
      />
      <List
        list={ list }
        onDelete={ handleDelete }
        onToggle={ toggleTodoItem }
      />
    </div>
  );
}

export default Todo;
