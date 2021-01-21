import React from 'react';
import './TodoListItem.css'
import { Check2, Circle } from 'react-bootstrap-icons';

function TodoListItem({item, handleDelete, toggleTodoItem}) {
  const todoClass = item.isDone ? 'done' : 'undone';
  const isDoneItem = item.isDone;
  const svgStyle = { marginLeft: 15 };
  const onDelete = event => {
    event.stopPropagation();
    handleDelete(item.id)
  }

  return(
    <li className="list-group-item" onClick={() => toggleTodoItem(item.id)}>
      <div className={todoClass}>
        {
          isDoneItem
          ? <Check2 />
          : <Circle />
        }
        <span style={svgStyle}>
          {item.value}
        </span>
        <button type='button' className='close' onClick={onDelete}>&times;</button>
      </div>
    </li>
  )
}

export default TodoListItem;