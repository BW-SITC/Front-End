import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field, ResetForm} from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
	const [members, setMembers] = useState([])
	useEffect(() => {
		if (isSubmitting) {
			setMembers([...members])
	}
		},[values]);
    return (
		<div>
        <Form>
			
			<div>
				<div>
					{touched.name && errors.name && <p>{errors.name}</p>}
					<Field type="text" name="name" placeholder="Your Name" />
				</div>
				{touched.email && errors.email && <p>{errors.email}</p>}
				<Field type="email" name="email" placeholder="Email" />
			</div>
			<div>
				{touched.password && errors.password && <p>{errors.password}</p>}
				<Field type="password" name="password" placeholder="Password" />
			</div>
			<label>
				<Field type="checkbox" name="tos" checked={values.tos} />
				Accept TOS
			</label>
			<Field component="select" name="role">
				<option value="teamLead">TL</option>
				<option value="feArch">FE-Arch</option>
				<option value="beArch">BE-Arch</option>
				<option value="dev">Dev</option>
				<option value="uiDev">UI-Dev</option>
			</Field>
			<button type='submit' disabled={isSubmitting}>Submit</button>
		</Form>
	
		<div>		
             <h1>I am here in the Display place chilling.</h1>
		 	 {Array.from(admins).map(admin => (
                 <div key={admin.id}>
		 			<h2>{admin.name}</h2>
		 			<p>{admin.role} </p>
		 			<p>{admin.email} </p>
				</div>
			))}
				</div>
		</div>
		);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ name, email, password, tos, role }) {
		return {
			name: name || "",
			email: email || "",
			password: password || "",
			tos: tos || false,
			role: role || "Team Lead"
		};
	},
	validationSchema: Yup.object().shape({
        email: Yup.string()
			.email("Email not valid")
			.required("Email is required"),
		password: Yup.string()
        .min(8, "Password must be 8 characters or longer")
			.required("Password is required")
        }),
	handleSubmit(values, { setSubmitting }) {
			axios
			
				.post("https://reqres.in/api/users", values)
				.then(res => {
					console.log(res); 
					setSubmitting(false);
				})
				.catch(err => {
                    console.error(err); // There was an error creating the data and logs to console
					setSubmitting(false);
				});
            }
        }
)(LoginForm);


export default FormikLoginForm
    

