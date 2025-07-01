const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/calendar.json');

const readEvents = () => {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeEvents = (events) => {
  fs.writeFileSync(dataPath, JSON.stringify(events, null, 2));
};

module.exports = { readEvents, writeEvents };