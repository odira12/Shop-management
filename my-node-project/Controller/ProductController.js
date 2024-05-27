const Product = require('../models/product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const product = new Product({ name, price, stock });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const sellProduct = async (req, res) => {
  const { id, quantity } = req.body;
  try {
    const product = await Product.findById(id);
    if (product.stock < quantity) {
      return res.status(400).json({ message: 'Not enough stock' });
    }
    product.stock -= quantity;
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProducts, addProduct, deleteProduct, sellProduct };
