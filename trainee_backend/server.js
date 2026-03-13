const express = require('express');
const cors = require('cors');
const tasksRouter = require('./routes/tasks');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.use('/tasks', tasksRouter);

app.get('/health', (req, res) => {
  res.json({
    status: 'running',
    service: 'task-manager'
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});