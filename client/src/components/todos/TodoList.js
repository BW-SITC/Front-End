import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Todo from './Todo';
import {fetchTodos} from '../actions/todoActions'

const TodoList = (props) => {
console.log('TodoList.js -> %cprops:', 'color: dodgerblue', props)
useEffect(() => {
  fetchTodos()
 
}, []);
if (props.isFetching) {
  return <h2>Loading Quotes...</h2>;
}
  return (
    <div>
      {props.error && <p>props.error</p>}
      {props.todoList.map(todo => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    quotesBox: state.quotesBox,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStatetoProps,
  { fetchTodos }
)(TodoList);
