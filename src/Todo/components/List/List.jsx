import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

const List = ({ list, onDelete, onToggle }) => {
  const renderItem = (item) => (
    <ListItem
      key={ item.id }
      item={ item }
      onToggle={ onToggle }
      onDelete={ onDelete }
    />
  );

  return (
    <div>
      <ul className='list-group'>
        { list.map((item) => !item.isDone && renderItem(item)) }
      </ul>
      <hr />
      <ul className='list-group'>
        { list.map((item) => item.isDone && renderItem(item)) }
      </ul>
    </div>
  );
};

export default List;
