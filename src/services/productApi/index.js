import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
	reducerPath: 'productApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => 'products',
		}),
		getProductById: builder.query({
			query: (id) => `/products/${id}`,
		}),
		createProduct: builder.mutation({
			query: (newProduct) => ({
				url: '/products/add',
				method: 'POST',
				body: newProduct,
			}),
		}),
		updateProduct: builder.mutation({
			query: ({ id, updatedProduct }) => ({
				url: `/products/${id}`,
				method: 'PUT',
				body: updatedProduct,
			}),
		}),
		deleteProduct: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductByIdQuery,
	useCreateProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation, } = productApi;
