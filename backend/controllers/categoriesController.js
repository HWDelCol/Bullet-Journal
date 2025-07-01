const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/categories.json');

const readCategories = () => {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeCategories = (categories) => {
  fs.writeFileSync(dataPath, JSON.stringify(categories, null, 2));
};

module.exports = { readCategories, writeCategories };