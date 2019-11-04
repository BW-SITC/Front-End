import React from "react";
import TodoList from './TodoList';

export default function Todo(props) {
console.log('Todo.js -> %cprops:', 'color: magenta', props.todo.instructions)
 
  return (
    <div>
      <h2
        style={{
          cursor: "pointer",
          textDecoration: `${props.todo.completed ? "line-through" : "none"}`,
          opacity: `${props.todo.completed ? "0.2" : "1"}`
        }}
        onClick={() =>
          props.dispatch({ type: "TOGGLE_TODO", payload: props.todo.id })
        }
      >
        {!props.todo.completed && (
          <span
            style={{
              height: "12px",
              width: "12px",
              border: "2px solid white",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "2%"
            }}
          >
            {props.todo.instruction}
          </span>
        )}
        {props.todo.completed && (
          <span
            style={{
              height: "12px",
              width: "12px",
              border: "2px solid white",
              // backgroundColor: "white",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "2%"
            }}
          >
            {props.todo.instructions}
          </span>
        )}
        {props.todo.instructions}
      </h2>
    </div>
  );
}
