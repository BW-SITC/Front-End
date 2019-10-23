import React, { useReducer } from "react";
import "./App.css";

import { initialState, todoReducer } from "./components/reducers/todoReducer";
import FormikLoginForm  from "./components/loginPage/LoginForm";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// import TodoClear from "./components/TodoClear";
import VolunteerList from './components/VolunteerList'


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const LoginForm = FormikLoginForm
  return (
    <div className="App">
      {/* <h1>Reducer Todo App</h1> */}

      {/* <FormikLoginForm /> */}
      {/* <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} /> */}
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/volunteerList">Volunteer List</Link>
        </li>
        <li>
          <Link to="/protected">Admin Todo List</Link>
        </li>
        <li>
          <Link to="/protected/view">View Todo List</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route component={LoginForm} />
        <PrivateRoute exact path="/protected" component={TodoForm} />
        <PrivateRoute path="/protected/view" component={TodoList} />
        <PrivateRoute path="/volunteerList" component={VolunteerList} />
      </Switch>
    </div>
  );
}

export default App;
