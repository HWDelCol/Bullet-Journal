const { readNotes, writeNotes } = require('../models/noteModel');
const { v4: uuidv4 } = require('uuid');

const getAllNotes = (req, res) => {
  res.json(readNotes());
};

const createNote = (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Título e conteúdo são obrigatórios' });

  const notes = readNotes();
  const newNote = { id: uuidv4(), title, content, createdAt: new Date() };
  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const notes = readNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return res.status(404).json({ error: 'Nota não encontrada' });

  notes[index] = { ...notes[index], title, content };
  writeNotes(notes);
  res.json(notes[index]);
};

const deleteNote = (req, res) => {
  const { id } = req.params;
  const notes = readNotes();
  const filtered = notes.filter((n) => n.id !== id);
  if (notes.length === filtered.length) return res.status(404).json({ error: 'Nota não encontrada' });

  writeNotes(filtered);
  res.status(204).send();
};

module.exports = { getAllNotes, createNote, updateNote, deleteNote };