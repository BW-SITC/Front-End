import React, {useReducer} from "react";
import TodoList from "./todos/TodoList";
import TodoClear from "./todos/TodoClear";
import VolunteerList from "./VolunteerList";
import { Link } from "react-router-dom";
import {todoReducer ,initialState} from './reducers/todoReducer';


const HomeVolunteer = props => {
console.log('HomeVolunteer.js -> %cprops:', 'color: cyan', props)
  const logout = () => {
   
    localStorage.removeItem("token");
  };
const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="todoList">
      <h1>Volunteer Home Page</h1>
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} />

      <VolunteerList />
      <div>
        <Link to="/">
          <button onClick={logout}>Log Out</button>
        </Link>
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default HomeVolunteer;
