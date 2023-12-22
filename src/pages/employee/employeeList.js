// /src/components/EmployeeList.js

import React from 'react';
import { useAddEmployeeMutation, useGetEmployeesQuery } from '../../services';

const EmployeeList = () => {
	const { data: employees, error } = useGetEmployeesQuery();

	const [addEmployee, { isLoading: isAdding }] = useAddEmployeeMutation();

	const handleAddEmployee = async () => {
		await addEmployee({
			name: 'John Doe',
			salary: 50000,
			age: 30,
		});
	};

	console.log("employees===================>", employees)

	if (error) {
		return <div>Error loading employees</div>;
	}

	return (
		<div>
			<h1>Employee List</h1>
			{/* <button onClick={handleAddEmployee} disabled={isAdding}>
                Add Employee
            </button>
            {isAdding && <p>Adding employee...</p>}
            {employees && (
                <ul>
                    {employees.map((employee) => (
                        <li key={employee.id}>{employee.employee_name}</li>
                    ))}
                </ul>
            )} */}
		</div>
	);
};

export default EmployeeList;
