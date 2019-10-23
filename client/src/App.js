import React, { useReducer } from "react";
import "./App.css";
import { initialState, todoReducer } from "./components/reducers/todoReducer";
import FormikLoginForm  from "./components/loginPage/LoginForm";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/todos/TodoForm";
import TodoClear from "./components/todos/TodoClear";
import VolunteerList from './components/VolunteerList'
import Home from "./components/Home.js"; 


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const LoginForm = FormikLoginForm
  return (
    
    
    <div className='App'>
    
    <Route exact path="/" render={props => (
        <Home {...props}  />
      )} />

      <h1>Reducer Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} />

    <FormikLoginForm/>

    <VolunteerList/>

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
        <Route path="/volunteerList" component={VolunteerList} />
      </Switch>
    </div>
    
  );
}

export default App;
