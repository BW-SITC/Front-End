import React from 'react';

export default function TodoClear(props) {
  return (
    <button
      className='clear-button'
      onClick={() => props.dispatch({ type: 'CLEAR_COMPLETED' })}>
      Clear completed
    </button>
  );
}