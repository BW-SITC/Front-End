import React, {  useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { initialState, todoReducer } from './components/reducers/todoReducer';
import FormikLoginForm from './components/loginPage/Form'
import Home from "./components/Home.js"; 
import TodoList from './components/todos/TodoList';
import TodoForm from './components/todos/TodoForm';
import TodoClear from './components/todos/TodoClear';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Router>
    
    <div className='App'>
    
    <Route exact path="/" render={props => (
        <Home {...props}  />
      )} />

      <h1>Reducer Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} />

    <FormikLoginForm/>

    </div>
    </Router>
  );
}

export default App;