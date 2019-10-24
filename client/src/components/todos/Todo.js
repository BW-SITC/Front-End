import React from 'react';
import { fetchTodos } from "../actions/todoActions";
import { connect } from "react-redux";

 const Todo = (props) => {
  // const dueDate = new Date(props.todo.doBy);
  return (
    <div>
      <h2
        style={{
          cursor: 'pointer',
          textDecoration: `${props.todo.completed ? 'line-through' : 'none'}`,
          opacity: `${props.todo.completed ? '0.2' : '1'}`,
        }}
        onClick={() =>
          props.dispatch({ type: 'TOGGLE_TODO', payload: props.todo.id })
        }>
        {!props.todo.completed && (
          <span
            style={{
              height: '12px',
              width: '12px',
              border: '2px solid white',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '2%',
            }}></span>
        )}
        {props.todo.completed && (
          <span
            style={{
              height: '12px',
              width: '12px',
              border: '2px solid white',
              backgroundColor: 'white',
              borderRadius: '50%',
              display: 'inline-block',
              marginRight: '2%',
            }}></span>
        )}
        {props.todo.item}
      </h2>
    
    
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    todoList: state.todoList,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStatetoProps,
  { fetchTodos }
)(Todo);
