import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../AxiosWithAuth";
import HomeVolunteer from "../HomeVolunteer";

function LoginForm({ role, errors, touched, isSubmitting }) {
	
  	const [volunteers, setVolunteers] = useState([]);
//   const [endpoint, setEndpoint] = useState('')
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
            <Field type="text" name="name" placeholder="Your Name" />
          </div>
          {/* {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" /> */}
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        {/* <label>
				<Field type="checkbox" name="register" checked={volunteer.register} />
				Register
			</label> */}
        {/* <Field component="select" name="role">
          <option value="admin" endpoint="auth/login/admin">Admin</option>
          <option value="volunteer" endpoint="auth/login">Volunteer</option>
          <option value="student">Student</option>
        </Field> */}
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
	
 mapPropsToValues({ name, password}) {
    return {
      name: name || "",
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
  handleSubmit(role, { setSubmitting }) {
  

    AxiosWithAuth()
      .post("auth/login")
      .then(res => {
        console.log(res); // Data was created successfully and logs to console
        // volunteers.push(res.data)
        // console.log(res)
        // setSubmitting(res);
        // resetForm();
        setSubmitting(false);

      })
      .catch(err => {
        console.error(err); // There was an error creating the data and logs to console
        setSubmitting(false);
      });
    }
    
})(LoginForm);


export default FormikLoginForm;
