import axios from 'axios';

const BASE_URL = 'https://api.example.com';

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getAllItems = () => apiService.get('/items');
export const getItemById = (itemId) => apiService.get(`/items/${itemId}`);
export const createItem = (data) => apiService.post('/items', data);
export const updateItem = (itemId, data) => apiService.put(`/items/${itemId}`, data);
export const deleteItem = (itemId) => apiService.delete(`/items/${itemId}`);
