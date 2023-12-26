import React from 'react';
import { useGetProductByIdQuery, useGetProductsQuery } from '../../services/productApi';


const List = () => {
	const { data: products, error, isLoading } = useGetProductsQuery();
	const { data } = useGetProductByIdQuery(1);
	console.log("data========>", data)


	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<div>
			<h1>Products List</h1>
			<ul>
				{products.products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
