import React, { useState, useEffect } from "react";
import FormikLoginForm from "./LoginFormAdmin";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginPageAdmin = () => {
  // console.log('VolunteerLoginPage.js -> %cprops:', 'color: magenta', props)
  const [newAdmin, setNewAdmin] = useState([]);
  const handleChange = e => {
    setNewAdmin ({
      ...setNewAdmin,
      [e.target.name]: e.target.value,
      [e.target.password]: e.target.value
    });
  };
  useEffect(() => {
    register();
  }, []);

  const handleSubmit = e => {
    // e.preventDefault();
    // dispatch(postVolunteer(setNewAdminnewAdmin));
    register(newAdmin);
  };

  console.log(
    "LoginPageAdmin.js -> %cnewAdmin:",
    "color: deepPink",
    newAdmin
  );

  function register() {
    console.log(
      "LoginPageAdmin.js -> %cnewAdmin:",
      "color: deepPink",
      newAdmin
    );
    axios
      .post(
        `https://school-in-cloud.herokuapp.com/api/auth/login/admin`,
        newAdmin
      )

      .then(res => localStorage.setItem("token", res.data.token))

      .catch(err =>
        console.error("Err! Good data's gone bad here, boss:", err.response)
      );
  }
  console.log(
    "LoginPageAdmin.js -> %cnewAdmin:",
    "color: green",
    newAdmin
  );
  return (
    <div>
      <FormikLoginForm />
      <Link to={"/protected/admin"}>
        <button>Home Page</button>
      </Link>

      <h3>
        To Register as a new admin please enter your "Name" and a "password"
        below
      </h3>
      <form>
        <div className="adminPost-form">
          <input
            type="text"
            name="username"
            placeholder="name"
            onChange={handleChange}
          />
          {/* {errors.name && <p>{errors.name}</p>} */}
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          {/* {errors.age && <p>{errors.age}</p>} */}

          <button onClick={handleSubmit}>Register with us!</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPageAdmin;
