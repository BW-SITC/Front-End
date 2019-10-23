import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import { withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import AxiosWithAuth from '../AxiosWithAuth'

function LoginForm({ values, errors, touched, isSubmitting }) {
	const [members, setMembers] = useState([])
	useEffect(() => {
		if (isSubmitting) {
			setMembers([...members])
	}
		},[members]);
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
			{/* <label>
				<Field type="checkbox" name="tos" checked={values.tos} />
				Accept TOS
			</label> */}
			<Field component="select" name="role">
				<option value="admin">Admin</option>
				<option value="volunteer">Volunteer</option>
				<option value="student">Student</option>
				
			</Field>
			<button type='submit' disabled={isSubmitting}>Submit</button>
		</Form>
	
		<div>		
          
		 	 {Array.from(members).map(member => (
                 <div key={member.id}>
		 			<h2>{member.name}</h2>
		 			<p>{member.role} </p>
		 			<p>{member.email} </p>
				</div>
			))}
				</div>
		</div>
		);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ name, email, password, role }) {
		return {
			name: name || "",
			email: email || "",
			password: password || "",
			// tos: tos || false,
			role: role || "student"
		};
	},
	validationSchema: Yup.object().shape({
        email: Yup.string()
			.email("Email not valid")
			.required("Email is required"),
		password: Yup.string()
        .min(4, "Password must be 4 characters or longer")
			.required("Password is required")
        }),
	handleSubmit(values, { setSubmitting }) {
		// let members =[]
		// if (values.email === "alreadytaken@atb.dev") {
		// 	setErrors({ email: "That email is already taken" });
		// } else {
			AxiosWithAuth()
			
				.post("/auth/login", values)
				.then(res => {
					console.log(res); // Data was created successfully and logs to console
					// members.push(res.data)
					// console.log(res)
					setSubmitting(res)
                    // resetForm();
					// setSubmitting(false);
				})
				.catch(err => {
                    console.error(err); // There was an error creating the data and logs to console
					setSubmitting(false);
				});
            }
        }
)(LoginForm);

// const Display = (members => {
// 	// const [isSubmitting] = useState([])
//     console.log("Form.js -> %cValues:", "color: fushia", members);
//     return ( 
//         // <div>
//         //     <h1>I am here in the Display place chilling.</h1>
// 		// 	 {Array.from(members).map(member => (
//         //         <div key={member.id}>
// 		// 			<h2>{member.name}</h2>
// 		// 			<p>{member.role} </p>
// 		// 			<p>{member.email} </p>
// 		// 		</div>
// 		// 	))}
// 		// </div>
        
// 	);
// });


export default FormikLoginForm
    

