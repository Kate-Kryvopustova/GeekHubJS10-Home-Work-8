import React from 'react';
import {Check2, Circle} from 'react-bootstrap-icons';
import './ListItem.css';

const ListItem = ({ item, onDelete, onToggle }) => (
  <li className='list-group-item' onClick={ () => onToggle(item.id) }>

    <div className={ item.isDone ? 'done' : 'undone' }>

      { item.isDone
        ? <Check2/>
        : <Circle/> }

      <span style={ { marginLeft: 15 } }>{ item.value }</span>

      <button
        type='button'
        className='close'
        onClick={ (event) => {
          event.stopPropagation();
          onDelete(item.id);
        } }
      >
        &times;
      </button>
    </div>
  </li>
);

export default ListItem;
