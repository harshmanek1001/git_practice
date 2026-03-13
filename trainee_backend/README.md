# Trainee Backend

## Description
This is the backend service for the Task Manager application. It provides RESTful APIs to manage tasks, including creating, viewing, and deleting tasks. It also includes a health check endpoint.

## Tech Stack
- Node.js
- Express

## Installation
1. Navigate to the trainee_backend directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` or `node server.js` to start the server.

The server will run on port 8080.

## API Endpoints

### GET /health
Returns the service status.

**Response:**
```json
{
  "status": "running",
  "service": "task-manager"
}
```

### GET /tasks
Returns a list of all tasks.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Sample Task",
    "description": "This is a sample task",
    "createdAt": "2023-10-01T00:00:00.000Z"
  }
]
```

### POST /tasks
Creates a new task.

**Request Body:**
```json
{
  "title": "New Task",
  "description": "Description of the task"
}
```

**Response:**
```json
{
  "id": 2,
  "title": "New Task",
  "description": "Description of the task",
  "createdAt": "2023-10-01T00:00:00.000Z"
}
```

### DELETE /tasks/:id
Deletes a task by ID.

**Response:** 204 No Content

## How to Test
Use curl or Postman to test the endpoints.

- Health check: `curl http://localhost:8080/health`
- Get tasks: `curl http://localhost:8080/tasks`
- Create task: `curl -X POST http://localhost:8080/tasks -H "Content-Type: application/json" -d '{"title": "Test Task"}'`
- Delete task: `curl -X DELETE http://localhost:8080/tasks/1`