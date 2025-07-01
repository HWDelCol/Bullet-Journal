const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const pingRoutes = require('./routes/ping');
const taskRoutes = require('./routes/tasks');
const noteRoutes = require('./routes/notes');
const categoryRoutes = require('./routes/categories');
const calendarRoutes = require('./routes/calendar');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/ping', pingRoutes);
app.use('/tasks', taskRoutes);
app.use('/notes', noteRoutes);
app.use('/categories', categoryRoutes);
app.use('/calendar', calendarRoutes);
// Rota raiz
app.get('/', (req, res) => {
  res.send('Bullet Journal API está rodando!');
});

module.exports = app;