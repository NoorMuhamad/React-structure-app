import { endPoints as employeeEndpoints } from '../../pages/employee/employeeApi';

export const endPoints = {
    ...employeeEndpoints,
    getEmployee: (id) => ({
        url: `employee/${id}`,
    }),
    createEmployee: (newEmployee) => ({
        url: 'create',
        method: 'POST',
        body: newEmployee,
    }),
    updateEmployee: (id, updatedEmployee) => ({
        url: `update/${id}`,
        method: 'PUT',
        body: updatedEmployee,
    }),
    deleteEmployee: (id) => ({
        url: `delete/${id}`,
        method: 'DELETE',
    }),
};