import React, {useReducer} from 'react'
// import TodoList from './TodoList'
import TodoForm from './todos/TodoForm'
import VolunteerList from "./VolunteerList";
import TodoList from './todos/TodoList';
import {todoReducer, initialState} from './reducers/todoReducer';





const HomeAdmin = props => {
    
const [state, dispatch] = useReducer(todoReducer, initialState);

return (
  <div className="todo.list">
    <TodoForm />
    <VolunteerList />
    <TodoList state={state} dispatch={dispatch} />
  </div>
);}

export default HomeAdmin