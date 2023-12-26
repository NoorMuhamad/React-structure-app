import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '../services/productApi';

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});


// export const store = configureStore({
//     reducer: {
//         [productApi.reducerPath]: productApi.reducer,
//         [employeeApi.reducerPath]: employeeApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(productApi.middleware, employeeApi.middleware),
// });
