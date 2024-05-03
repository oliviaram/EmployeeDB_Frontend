import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Landing from "./Landing";
import Navigate from "./main/head/Navigate";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddEmployee from "./main/employee/AddEmployee";
import EditEmployee from "./main/employee/EditEmployee";
import EmployeeCard from "./main/employee/EmployeeCard";
import ListEmployees from "./main/employee/ListEmployees";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<Navigate />
				<Routes>
					<Route
						exact
						path="/"
						element={<Landing />}></Route>
					<Route
						exact
						path="/view-employees"
						element={<ListEmployees />}></Route>
					<Route
						exact
						path="/add-employees"
						element={<AddEmployee />}></Route>
					<Route
						exact
						path="/edit-employee/:id"
						element={<EditEmployee />}></Route>
					<Route
						exact
						path="/employee-profile/:id"
						element={<EmployeeCard />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;