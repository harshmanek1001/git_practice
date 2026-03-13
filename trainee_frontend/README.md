# Trainee Frontend

## Description
This is the frontend interface for the Task Manager application. It provides a simple web UI to interact with the backend API, allowing users to view, add, and delete tasks.

## Tech Stack
- HTML
- CSS
- JavaScript

## Installation
1. Ensure the backend is running on `http://localhost:8080`.
2. Open `index.html` in a web browser.

No additional setup is required.

## Features
- Display a list of tasks fetched from the backend.
- Add new tasks via a form.
- Delete tasks with a button click.

## API Integration
The frontend communicates with the backend at `http://localhost:8080` using the following endpoints:
- GET /tasks: Fetch all tasks
- POST /tasks: Create a new task
- DELETE /tasks/:id: Delete a task by ID

## How to Test
1. Start the backend server.
2. Open `index.html` in a browser.
3. Add tasks using the form.
4. View and delete tasks from the list.