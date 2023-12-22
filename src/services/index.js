import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { endPoints } from '../api/endPoints';

export const apiService = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummy.restapiexample.com/api/v1/' }),
    endPoints,
});

export const { useGetEmployeesQuery, useAddEmployeeMutation } = apiService;