const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/notes.json');

const readNotes = () => {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeNotes = (notes) => {
  fs.writeFileSync(dataPath, JSON.stringify(notes, null, 2));
};

module.exports = { readNotes, writeNotes };