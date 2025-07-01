const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/tasks.json');

const readTasks = () => {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

module.exports = { readTasks, writeTasks };