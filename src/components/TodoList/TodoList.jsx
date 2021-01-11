import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem'
import './TodoList.css'

function TodoList({ list, handleDelete, toggleTodoItem }) {
  const activeList = [];
  const completeList = [];

  list.forEach(item => {
    const listItem = <TodoListItem key={item.id} item={item} handleDelete={handleDelete} toggleTodoItem={toggleTodoItem} />;
    
    if (item.isDone) {
      return completeList.push(listItem)
    } else {
      return activeList.push(listItem)
    }
  });

  return (
    <div>
      <ul className='list-group'>
        {activeList}
      </ul>
      <hr/>
      <ul className='list-group'>
        {completeList}
      </ul>
    </div>
  )
}

export default TodoList;