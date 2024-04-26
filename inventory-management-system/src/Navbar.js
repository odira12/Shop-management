import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Product List</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
        <li><Link to="/sale">Sale Form</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
