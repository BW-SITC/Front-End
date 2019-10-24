import React, {useEffect} from 'react';
import { connect } from "react-redux";
import Todo from './Todo';
import {fetchTodos} from '../actions/todoActions'

const TodoList = (props) => {
console.log('TodoList.js -> %cprops:', 'color: green', props)

useEffect(() => {
  fetchTodos()
 
}, []);
if (props.isFetching) {
  return <h2>Loading Todos...</h2>;
}
  return (
    <div>
      {props.error && <p>props.error</p>}
      {props.state.map(todo => (
        <Todo key={todo._id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList
// const mapStatetoProps = state => {
// console.log('TodoList.js -> %cstate:', 'color: lime', state)
//   return {
//     todoList: state.TodoList,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   mapStatetoProps,
//   { fetchTodos }
// )(TodoList);
