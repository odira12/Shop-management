const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let products = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.post('/sale', (req, res) => {
  const SelectedProducts = req.body.products;
  // Process the sale logic here
  console.log('Sale processed successfully');
  res.status(200).json({ message: 'Sale processed successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
