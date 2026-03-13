let tasks = [];
let nextId = 1;

const getTasks = (req, res) => {
  res.json(tasks);
};

const createTask = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = {
    id: nextId++,
    title,
    description: description || '',
    createdAt: new Date()
  };
  tasks.push(task);
  res.status(201).json(task);
};

const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }
  tasks.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getTasks,
  createTask,
  deleteTask
};