import React from 'react';
import useFetch from '../hooks/useFetch';
import axios from 'axios';

const ProductList = () => {
  const { data: products, loading, error } = useFetch('http://localhost:5000/api/products');

  const deleteProduct = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => window.location.reload());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price} - {product.stock} in stock
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
