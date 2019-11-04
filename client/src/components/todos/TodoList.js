import React, {useReducer, useEffect, dispatch}  from "react";
import Todo from "./Todo";
import { todoReducer, initialState } from "../reducers/todoReducer";
import {fetchTodos} from '../actions/todoActions';


export default function TodoList(props) {
console.log('TodoList.js -> %cprops:', 'color: lime', props)
  const [state, setState, dispatch] = useReducer(todoReducer, initialState);
 useEffect(() => {
   // props.fetchQuotes()
   fetchTodos()
   
   // console.log('QuotesBox.js -> %cprops:', 'color: purple', props)
 }, []);
 if (props.isFetching) {
   return <h2>Loading Todos...</h2>;
 }

  return (
   <div className='todoPage'>
    <h2>Todo List</h2>
    <div className = 'todoList'>
      {props.state.map(todo => (
        <Todo key={todo.id} todo={todo} dispatch={props.dispatch} />
      ))}
    </div>
    </div>
      );
}
