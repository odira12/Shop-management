import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/products', { name, price, stock })
      .then(() => {
        setName('');
        setPrice(0);
        setStock(0);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Product</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} />
      </label>
      <label>
        Stock:
        <input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value, 10))} />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
