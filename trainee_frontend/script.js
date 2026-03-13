const API_BASE = 'http://localhost:8080';

document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
});

document.getElementById('taskForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  try {
    const response = await fetch(`${API_BASE}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    });

    if (response.ok) {
      document.getElementById('title').value = '';
      document.getElementById('description').value = '';
      loadTasks();
    } else {
      alert('Error creating task');
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

async function loadTasks() {
  try {
    const response = await fetch(`${API_BASE}/tasks`);
    const tasks = await response.json();
    displayTasks(tasks);
  } catch (error) {
    console.error('Error loading tasks:', error);
  }
}

function displayTasks(tasks) {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${task.title}</strong>
        <p>${task.description}</p>
      </div>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

async function deleteTask(id) {
  try {
    const response = await fetch(`${API_BASE}/tasks/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      loadTasks();
    } else {
      alert('Error deleting task');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}