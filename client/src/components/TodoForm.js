import React, { useState } from 'react';

import Tags from './Tags';

export default function TodoForm(props) {
  const [todo, setTodo] = useState('');
  const [tag, setTag] = useState('');

  const handleSelect = e => {
    setTag(e.target.value);
  };

  return (
    <div className='input-bar'>
      <input
        type='text'
        value={todo}
        placeholder='...todo'
        onChange={e => setTodo(e.target.value)}
      />
      <Tags handleSelect={handleSelect} />
      <button
        onClick={() => {
          props.dispatch({
            type: 'ADD_TODO',
            payload: { todo: todo, tag: tag },
          });
          setTodo('');
        }}>
        Add
      </button>
    </div>
  );
}