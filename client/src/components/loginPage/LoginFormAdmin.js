import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../AxiosWithAuth";
import NavBar from "../NavBar";
import { Heading, ButtonDiv, Description, Label } from "../styling/styled";

function LoginForm({ errors, touched, isSubmitting }) {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (isSubmitting) {
      setAdmins([...admins]);
    }
  }, [admins]);
  return (
    <div>
      <NavBar />
      <Heading> Login as an admin </Heading>
      <Description>
        To Register as an admin, you will need to create a username and
        password.
        <br />
        The password must contain at least 4 characters.
      </Description>
      <Form>
        <Label>Your Name</Label>
        <div>
          {touched.name && errors.name && <p>{errors.name}</p>}
          <Field type="text" name="username" placeholder="Your Name" />
        </div>
        <Label>Password</Label>
        <div>
          {touched.password && errors.password && <p>{errors.password}</p>}
          <Field type="password" name="password" placeholder="Password" />
        </div>

        <ButtonDiv>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </ButtonDiv>
      </Form>

      <div>
        {Array.from(admins).map(admin => (
          <div key={admin.id}>
            <h2>{admin.name}</h2>
            {/* <p>{admin.role} </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      name: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .min(4, "Password must be 4 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values, { setSubmitting }) {
    console.log(
      "LoginFormAdmin.js -> %cname:",
      "color: purple",
      values.username
    );
    console.log(
      "LoginFormAdmin.js -> %cpassword:",
      "color: green",
      values.password
    );

    AxiosWithAuth()
      .post("auth/login/admin", values)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        setSubmitting(false);
      })

      .catch(err => {
        console.error("Sorry, boss... POST didn't work:", err); // There was an error creating the data and logs to console
        setSubmitting(false);
      });
  }
})(LoginForm);

export default FormikLoginForm;
