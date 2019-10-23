import React, {  useReducer } from 'react';
import './App.css';

import { initialState, todoReducer } from './components/reducers/todoReducer';
import FormikLoginForm from './components/loginPage/Form'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoClear from './components/TodoClear';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className='App'>
      <h1>Reducer Todo App</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
      <TodoClear dispatch={dispatch} />

    <FormikLoginForm/>

    </div>
  );
}

export default App;