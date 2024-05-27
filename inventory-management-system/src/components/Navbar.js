import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  
  <nav>
    <Link to="/">Product List</Link>
    <Link to="/add-product">Add Product</Link>
    <Link to="/sales">Sales</Link>
  </nav>
);

export default Navbar;
