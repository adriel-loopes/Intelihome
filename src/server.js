const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configurando o body-parser para lidar com dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configurando o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lopes', // substitua pela senha do seu MySQL
  database: 'checkout_db'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Rota para o formulário de checkout
app.post('/checkout', (req, res) => {
  const { name, email, address, card, expiry, cvv } = req.body;

  const query = 'INSERT INTO orders (name, email, address, card_number, expiry_date, cvv) VALUES (?, ?, ?, ?, ?, ?)';

  db.query(query, [name, email, address, card, expiry, cvv], (err, result) => {
    if (err) {
      console.error(err);
      return res.send('Erro ao processar o pedido.');
    }
    res.send('Pedido processado com sucesso!');
  });
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
