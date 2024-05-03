import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../head/Search";

const ListEmployees = () => {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadEmployees();
	}, []);

	const loadEmployees = async () => {
		const result = await axios.get(
			"http://localhost:8080/employees",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setEmployees(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:8080/employees/delete/${id}`
		);
		loadEmployees();
	};

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First name</th>
						<th>Last name</th>
						<th>Email</th>
						<th>Role</th>
						<th>Salary</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{employees
						.filter((emp) =>
							Object.values(emp).some((val) =>
								(typeof val === "string" || typeof val === "number" ) &&
								String(val).toLowerCase().includes(search.toLowerCase())
							)
						)
						.map((employee, index) => (
							<tr key={employee.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{employee.firstName}</td>
								<td>{employee.lastName}</td>
								<td>{employee.email}</td>
								<td>{employee.role}</td>
								<td>{employee.salary}</td>
								<td className="mx-2">
									<Link
										to={`/employee-profile/${employee.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-employee/${employee.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(employee.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default ListEmployees;