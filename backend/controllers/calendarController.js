const { readEvents, writeEvents } = require('../models/calendarModel');
const { v4: uuidv4 } = require('uuid');

const getAllEvents = (req, res) => {
  res.json(readEvents());
};

const createEvent = (req, res) => {
  const { title, start, end } = req.body;
  if (!title || !start) return res.status(400).json({ error: 'Título e data de início são obrigatórios' });

  const events = readEvents();
  const newEvent = { id: uuidv4(), title, start, end };
  events.push(newEvent);
  writeEvents(events);
  res.status(201).json(newEvent);
};

const updateEvent = (req, res) => {
  const { id } = req.params;
  const { title, start, end } = req.body;
  const events = readEvents();
  const index = events.findIndex((e) => e.id === id);
  if (index === -1) return res.status(404).json({ error: 'Evento não encontrado' });

  events[index] = { ...events[index], title, start, end };
  writeEvents(events);
  res.json(events[index]);
};

const deleteEvent = (req, res) => {
  const { id } = req.params;
  const events = readEvents();
  const filtered = events.filter((e) => e.id !== id);
  if (events.length === filtered.length) return res.status(404).json({ error: 'Evento não encontrado' });

  writeEvents(filtered);
  res.status(204).send();
};

module.exports = { getAllEvents, createEvent, updateEvent, deleteEvent };