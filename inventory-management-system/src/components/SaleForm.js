import React, { useState } from 'react';

const SaleForm = ({ products, calculateTotal }) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (e) => {
    const productId = e.target.value;
    const product = products.find(p => p.id === productId);
    setSelectedProducts([...selectedProducts, product]);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = selectedProducts.filter(p => p.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTotal(selectedProducts);
    setSelectedProducts([]);
  };

  return (
    <div>
      <h2>Sale Form</h2>
      <form onSubmit={handleSubmit}>
        <select onChange={handleAddProduct}>
          <option value="">Select a Product</option>
          {products.map(product => (
            <option key={product.id} value={product.id}>{product.name}</option>
          ))}
        </select>
        <ul>
          {selectedProducts.map(product => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button type="button" onClick={() => handleRemoveProduct(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <button type="submit">Calculate Total</button>
      </form>
    </div>
  );
};

export default SaleForm;
