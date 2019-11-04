import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../AxiosWithAuth";
import NavBar from "../NavBar";
import {
  Heading,
  Description,
  Label,
  
} from "../styling/styled"

function LoginForm({ values, errors, touched, isSubmitting }) {
	
  	const [admins, setAdmins] = useState([]);
//   const [endpoint, setEndpoint] = useState('')
  useEffect(() => {
    if (isSubmitting) {
      setAdmins([...admins]);
    }
  }, [admins]);
  return (
    <div>
      <NavBar />
      <Heading> Login as a Admin </Heading>
      <Description>
        To Register as a volunteer, you will need your name and password.
          <br />
        The password must contain at least 4 characters.
        </Description>
      <Form>
        <Label>Your Name</Label>
        <div>
          <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="text" name="user_name" placeholder="Your Name" />
          </div>
          {/* {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" /> */}
        </div>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>
        {/* <label>
				<Field type="checkbox" name="tos" checked={values.tos} />
				Accept TOS
			</label> */}
        
		<button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>

      <div>
        {Array.from(admins).map(admin => (
          <div key={admin.id}>
            <h2>{admin.name}</h2>
            <p>{admin.role} </p>
            {/* <p>{member.email} </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const FormikLoginForm = withFormik({
	
  mapPropsToValues({ username, password}) {
    return {
      name: name || "",
   
      password: password || "",
      // tos: tos || false,
      // role: role || "student"
    };
  },
  validationSchema: Yup.object().shape({
    
    password: Yup.string()
      .min(4, "Password must be 4 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { setSubmitting }) {
    
    AxiosWithAuth()
      .post("auth/login/admin", values)
      .then(res => {
        console.log(res); // Data was created successfully and logs to console
        // admins.push(res.data)
        // console.log(res)
        // setSubmitting(res);
        // resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.error('Error from the Login Form',err); 
        setSubmitting(false);
      });
  }
})(LoginForm);

// const Display = (admins => {
// 	// const [isSubmitting] = useState([])
//     console.log("Form.js -> %cValues:", "color: fushia", admins);
//     return (
//         // <div>
//         //     <h1>I am here in the Display place chilling.</h1>
// 		// 	 {Array.from(admins).map(member => (
//         //         <div key={member.id}>
// 		// 			<h2>{member.name}</h2>
// 		// 			<p>{member.role} </p>
// 		// 			<p>{member.email} </p>
// 		// 		</div>
// 		// 	))}
// 		// </div>

// 	);
// });

export default FormikLoginForm;
