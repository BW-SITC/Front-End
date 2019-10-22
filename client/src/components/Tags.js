import React from 'react';

const tags = ['Lambda', 'Coding', 'Home', 'Work'];

export default function Tags(props) {
  return (
    <select onChange={props.handleSelect}>
      <option>Select a tag</option>
      {tags.map(tag => (
        <option key={tag} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
}