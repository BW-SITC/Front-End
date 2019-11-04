import React, {dispatch, useReducer} from "react";
import {todoReducer, initialState} from "./reducers/todoReducer";
import TodoList from "./todos/TodoList";
import TodoForm from "./todos/TodoForm";
import TodoClear from "./todos/TodoClear";
import VolunteerList from "./VolunteerList";
import { Link } from "react-router-dom";



const HomeAdmin = props => {
  const logout = () => {
    localStorage.removeItem("token");
  };
const [state, dispatch] = useReducer(todoReducer, initialState);
  return (
    <homePage>
      <section className="todo.list">
        {/* <TodoList />
<TodoClear/> */}
        <h1>Admin Home Page</h1>

        <VolunteerList />
        <div>
          <Link to="/">
            <button onClick={logout}>Log Out</button>
          </Link>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </section>
      <todoList>
        <TodoList state={state} dispatch={dispatch} />
        <TodoClear dispatch={dispatch} />
        <TodoForm dispatch={dispatch} />
      </todoList>
    </homePage>
  );
 
};

export default HomeAdmin;
