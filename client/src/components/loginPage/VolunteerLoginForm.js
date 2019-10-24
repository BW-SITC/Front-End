import React, { useState, useEffect } from "react";

import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../AxiosWithAuth";



function LoginForm({ errors, touched, isSubmitting }) {
	
  	const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    if (isSubmitting) {
      setVolunteers([...volunteers]);
    }
  }, [volunteers]);
  return (
    <div>
      <Form>
        <div>
          <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="text" name="username" placeholder="Your Name" />
          </div>
          {/* {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" /> */}
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
      
     
		<button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        
      </Form>

      <div>
        {Array.from(volunteers).map(volunteer => (
          <div key={volunteer.id}>
            <h2>{volunteer.name}</h2>
            <p>{volunteer.role} </p>
            {/* <p>{volunteer.email} </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const FormikLoginForm = withFormik({

  mapPropsToValues({ username, password}) {
    return {
      name: username || "",
      password: password || "",
      // tos: register || false,
      // role: role || "volunteer"
      
    };
  },
  validationSchema: Yup.object().shape({
    
    password: Yup.string()
    .min(4, "Password must be 4 characters or longer")
    .required("Password is required")
  }),
  handleSubmit(values, { setSubmitting }) {
    
    console.log('VolunteerLoginForm.js -> %cname:', 'color: purple', values.username)
    console.log('VolunteerLoginForm.js -> %cpassword:', 'color: green', values.password)
    
    

    AxiosWithAuth()
      .post("auth/login", values)
      .then(res => {
        console.log(res); // Data was created successfully and logs to console
        // values.history.push('/protected/volunteer')
        // console.log(res)
        // setSubmitting(res);
        // resetForm();
        setSubmitting(false);

      })
      .catch(err => {
        console.error("Nope, POST didn't work:", err); // There was an error creating the data and logs to console
        setSubmitting(false);
      })
    }
    
})(LoginForm);


export default FormikLoginForm;
