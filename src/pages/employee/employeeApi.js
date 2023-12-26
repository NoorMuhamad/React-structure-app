import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../../services';


export const getEmployees = createAsyncThunk('employee/getEmployees', async () => {
    const response = await apiService.endPoints.getEmployees();
    return response.data;
});

export const getEmployee = createAsyncThunk('employee/getEmployee', async (id) => {
    const response = await apiService.endPoints.getEmployee(id);
    return response.data;
});

export const addEmployee = createAsyncThunk('employee/addEmployee', async (newEmployee) => {
    const response = await apiService.endPoints.createEmployee(newEmployee);
    return response.data;
});

export const updateEmployee = createAsyncThunk('employee/updateEmployee', async ({ id, updatedEmployee }) => {
    const response = await apiService.endPoints.updateEmployee(id, updatedEmployee);
    return response.data;
});

export const deleteEmployee = createAsyncThunk('employee/deleteEmployee', async (id) => {
    await apiService.endPoints.deleteEmployee(id);
    return id;
});

export const endPoints = {
    getEmployees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
};
