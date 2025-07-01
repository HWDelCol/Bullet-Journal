const { readCategories, writeCategories } = require('../models/categoryModel');
const { v4: uuidv4 } = require('uuid');

const getAllCategories = (req, res) => {
  res.json(readCategories());
};

const createCategory = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Nome é obrigatório' });

  const categories = readCategories();
  const newCategory = { id: uuidv4(), name };
  categories.push(newCategory);
  writeCategories(categories);
  res.status(201).json(newCategory);
};

const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categories = readCategories();
  const index = categories.findIndex((c) => c.id === id);
  if (index === -1) return res.status(404).json({ error: 'Categoria não encontrada' });

  categories[index].name = name;
  writeCategories(categories);
  res.json(categories[index]);
};

const deleteCategory = (req, res) => {
  const { id } = req.params;
  const categories = readCategories();
  const filtered = categories.filter((c) => c.id !== id);
  if (categories.length === filtered.length) return res.status(404).json({ error: 'Categoria não encontrada' });

  writeCategories(filtered);
  res.status(204).send();
};

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };