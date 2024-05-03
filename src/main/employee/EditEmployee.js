import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";

import {
	Link,
	useNavigate,
	useParams,
} from "react-router-dom";

const EditEmployee = () => {
	let navigate = useNavigate();

	const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		role: "",
		salary: ""
	});
	
	const {
		firstName,
		lastName,
		email,
		role,
		salary
	} = employee;

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:8080/employees/employee/${id}`
		);
		setEmployee(result.data);
	};

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};
	
	const updateEmployee = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:8080/employees/update/${id}`,
			employee
		);
		navigate("/view-employees");
	};

	return (
		<div className="col-sm-8 py-2 px-5 offset-2 shadow">
			<h2 className="mt-5"> Edit Employee</h2>
			<form onSubmit={(e) => updateEmployee(e)}>
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="firstName"
						id="firstName"
						required
						value={firstName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="lastName">
						Last Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="lastName"
						id="lastName"
						required
						value={lastName}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="email">
						Your Email
					</label>
					<input
						className="form-control col-sm-6"
						type="email"
						name="email"
						id="email"
						required
						value={email}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="role">
						Role
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="role"
						id="role"
						required
						value={role}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
				
				<div className="input-group mb-5">
					<label
						className="input-group-text"
						htmlFor="role">
						Salary
					</label>
					<input
						className="form-control col-sm-6"
						type="number"
						name="salary"
						id="salary"
						required
						value={salary}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success btn-lg">
							Update
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-employees"}
							type="submit"
							className="btn btn-outline-warning btn-lg">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default EditEmployee;