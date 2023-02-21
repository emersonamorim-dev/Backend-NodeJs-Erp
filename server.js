const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Array de produtos
const products = [
  { id: 1, name: 'Produto A', price: 10.00 },
  { id: 2, name: 'Produto B', price: 20.00 },
  { id: 3, name: 'Produto C', price: 30.00 },
];

// Endpoint para consultar todos os produtos
app.get('/products', (req, res) => {
  res.json(products);
});

// Endpoint para consultar um produto pelo ID
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    res.json(product);
  }
});

// Endpoint para adicionar um novo produto
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    res.status(400).json({ error: 'Nome e preço são obrigatórios' });
  } else {
    const id = products.length + 1;
    const product = { id, name, price };
    products.push(product);
    res.status(201).json(product);
  }
});

// Endpoint para atualizar um produto pelo ID
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    const { name, price } = req.body;
    if (!name || !price) {
      res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    } else {
      products[index].name = name;
      products[index].price = price;
      res.json(products[index]);
    }
  }
});

// Endpoint para deletar um produto pelo ID
app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Produto não encontrado' });
  } else {
    const product = products.splice(index, 1);
    res.json(product[0]);
  }
});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
