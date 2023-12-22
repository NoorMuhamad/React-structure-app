// slices/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createEmployeeApi, deleteEmployeeApi, fetchEmployeeApi, updateEmployeeApi } from '../api/employee';
const initialState = {
    employees: [],
    selectedEmployee: null,
    status: 'loading',
    error: null,
};

export const fetchEmployees = createAsyncThunk('data/fetchEmployees', async () => {
    try {
        const employees = await fetchEmployeeApi();
        return employees;
    } catch (error) {
        throw error;
    }
});

export const fetchEmployee = createAsyncThunk('data/fetchEmployee', async (id) => {
    try {
        const employee = await fetchEmployeeApi(id);
        return employee;
    } catch (error) {
        throw error;
    }
});

export const createEmployee = createAsyncThunk('data/createEmployee', async (employeeData) => {
    try {
        const newEmployee = await createEmployeeApi(employeeData);
        return newEmployee;
    } catch (error) {
        throw error;
    }
});

export const updateEmployee = createAsyncThunk('data/updateEmployee', async ({ id, employeeData }) => {
    try {
        const updatedEmployee = await updateEmployeeApi(id, employeeData);
        return updatedEmployee;
    } catch (error) {
        throw error;
    }
});

export const deleteEmployee = createAsyncThunk('data/deleteEmployee', async (id) => {
    try {
        await deleteEmployeeApi(id);
        return id;
    } catch (error) {
        throw error;
    }
});

const handleAsyncAction = (builder, asyncAction, onPending, onFulfilled, onRejected) => {
    builder
        .addCase(asyncAction.pending, (state) => {
            state.status = 'loading';
            onPending && onPending(state);
        })
        .addCase(asyncAction.fulfilled, (state, action) => {
            state.status = 'succeeded';
            onFulfilled && onFulfilled(state, action);
        })
        .addCase(asyncAction.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
            onRejected && onRejected(state, action);
        });
};

const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleAsyncAction(builder, fetchEmployees, null, (state, action) => {
            state.employees = action.payload;
        });

        handleAsyncAction(builder, fetchEmployee, null, (state, action) => {
            state.selectedEmployee = action.payload;
        });

        handleAsyncAction(builder, createEmployee, null, (state, action) => {
            state.employees.push(action.payload);
        });

        handleAsyncAction(builder, updateEmployee, null, (state, action) => {
            const index = state.employees.findIndex((e) => e.id === action.payload.id);
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        });

        handleAsyncAction(builder, deleteEmployee, null, (state, action) => {
            state.employees = state.employees.filter((e) => e.id !== action.payload);
        });
    },
});

export default employeeSlice.reducer;
