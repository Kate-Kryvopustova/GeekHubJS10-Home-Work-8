import React from 'react';
import { Button } from 'react-bootstrap';
import './Form.css';

function Form({ name, onChange, onSubmit, inputRef }) {
  return (
    <form className='form-inline' onSubmit={ onSubmit }>
      <input
        type='text'
        ref={ inputRef }
        onChange={ onChange }
        value={ name }
        className='form-control'
        placeholder='add a new task...'
      />
      <Button variant='outline-secondary' type='submit'>Add</Button>
    </form>
  );
}

export default Form;
