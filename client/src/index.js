import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import {todoReducer} from "./components/reducers/todoReducer";
import thunk from "redux-thunk";


const store = createStore(todoReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>      
<Router>
<App />
</Router>
</Provider>,
document.getElementById('root'));

