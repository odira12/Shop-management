//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import SaleForm from './components/SaleForm';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/sales" component={SaleForm} />
    </Switch>
  </Router>
);

export default App;
