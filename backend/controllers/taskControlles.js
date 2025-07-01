const { readTasks, writeTasks } = require('../models/taskModel');
const { v4: uuidv4 } = require('uuid');

const getAllTasks = (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Título é obrigatório' });

  const tasks = readTasks();
  const newTask = { id: uuidv4(), title, completed: false };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === id);

  if (taskIndex === -1) return res.status(404).json({ error: 'Tarefa não encontrada' });

  tasks[taskIndex] = { ...tasks[taskIndex], title, completed };
  writeTasks(tasks);
  res.json(tasks[taskIndex]);
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  const tasks = readTasks();
  const filtered = tasks.filter((t) => t.id !== id);

  if (tasks.length === filtered.length) return res.status(404).json({ error: 'Tarefa não encontrada' });

  writeTasks(filtered);
  res.status(204).send();
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };