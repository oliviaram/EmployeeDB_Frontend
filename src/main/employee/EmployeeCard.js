import React, {
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmployeeCard = () => {
	const { id } = useParams();

	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		role: "",
		salary: ""
	});

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:8080/employees/employee/${id}`
		);
		setEmployee(result.data);
	};

	return (
		<section
			className="shadow"
			style={{ backgroundColor: "whitesmoke" }}>
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-3">
						<div className="card mb-4">
							<div className="card-body text-center">
								<img
									src="https://cdn-icons-png.freepik.com/512/10542/10542456.png"
									alt="avatar"
									className="rounded-circle img-fluid"
									style={{ width: 150 }}
								/>
								<h5 className="my-3">
									{`${employee.firstName} ${employee.lastName}`}
								</h5>
							</div>
						</div>
					</div>
			
					<div className="col-lg-9">
						<div className="card mb-4">
							<div className="card-body">
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											First name
										</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.firstName}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Last name
										</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.lastName}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Email
										</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.email}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Role
										</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.role}
										</p>
									</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h5 className="mb-0">
											Salary
										</h5>
									</div>
									<div className="col-sm-9">
										<p className="text-muted mb-0">
											{employee.salary}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default EmployeeCard;