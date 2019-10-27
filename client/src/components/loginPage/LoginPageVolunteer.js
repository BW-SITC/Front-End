import React, { useState, useEffect } from "react";
import VolunteerLoginForm from "./LoginFormVolunteer";
import { Link } from "react-router-dom";
import axios from "axios";

const VolunteerLoginPage = () => {
  // console.log('VolunteerLoginPage.js -> %cprops:', 'color: magenta', props)
  const [newVolunteer, setNewVolunteer] = useState([]);


  const handleChange = e => {
    setNewVolunteer({ ...setNewVolunteer, [e.target.name]: e.target.value });
  };
  useEffect(() => {register()}, []);
  

  const handleSubmit = e => {
    // e.preventDefault();
    // dispatch(postVolunteer(setNewVolunteer));
    register();
  }
  console.log('VolunteerLoginPage.js -> %cnewVolunteer:', 'color: deepPink', newVolunteer)


    function register() {
      axios
        .post(
          `https://school-in-cloud.herokuapp.com/api/auth/register/`,
         newVolunteer
        )
        .then(res => 
         localStorage.setItem("token", res.data.token))

        .catch(err =>
          console.error("Err! Good data's gone bad here:", err.response)
        );
    }
    return (
      <div>
        <VolunteerLoginForm />
        <Link to={'/protected/volunteer'}>
          <button>Home Page</button>
        </Link>

        <h3>To Register as a new Volunteer please enter your "Name" and a "password" below</h3>
        <form>
          <div className="volunteerPost-form">
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

export default VolunteerLoginPage;
