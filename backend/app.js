const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pingRoutes = require('./routes/ping');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/ping', pingRoutes);

// Rota raiz
app.get('/', (req, res) => {
  res.send('Bullet Journal API está rodando!');
});

module.exports = app;