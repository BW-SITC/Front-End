import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import AdminLoginForm from './components/loginPage/AdminLoginForm';
// import FormikLoginForm from "./components/loginPage/AdminLoginForm";
import TodoList from "./components/todos/TodoList";
import TodoForm from "./components/todos/TodoForm";
import VolunteerList from "./components/VolunteerList";
import HomeAdmin from './components/HomeAdmin'
import HomeVolunteer from "./components/HomeVolunteer";
import HomeStudent from './components/HomeStudent';
import VolunteerLoginPage from './components/loginPage/VolunteerLoginPage';
import Home from "./components/Home.js";


function App() {
  // const [state, dispatch] = useReducer(todoReducer, initialState);
  // const LoginForm = FormikLoginForm;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/admin/login" component={AdminLoginForm} />
        <Route path="/volunteer/login" component={VolunteerLoginPage} />
        <Route path="/volunteerList" component={VolunteerList} />
        <Route path="/student/home" component={HomeStudent} />
        {/* <Route component={Home} /> */}
        <PrivateRoute exact path="/protected/volunteer" component={HomeVolunteer} />
        <PrivateRoute path="/protected/Admin" component={HomeAdmin} />
        <PrivateRoute path="/protected" component={TodoForm} />
        <PrivateRoute path="/protected/view" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
