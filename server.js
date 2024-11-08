const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files like CSS and JS

// In-memory storage for tasks
let tasks = [];

// Serve the HTML template
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));  // Send index.html to the client
});

// Handle task creation (POST /add)
app.post('/add', (req, res) => {
    const newTask = req.body.task;
    if (newTask) {
        const timestamp = new Date().toLocaleString();
        console.log('New task with timestamp:', { task: newTask, timestamp });

        tasks.push({ task: newTask, completed: false, timestamp: timestamp });
    }
    // Redirect to home page after task is added
    res.redirect('/');
});

// Handle task deletion (GET /delete/:task)
app.get('/delete/:task', (req, res) => {
    console.log(`Deleting task: ${req.params.task}`);
    tasks = tasks.filter(task => task.task !== req.params.task);  // Remove task from the array
    res.redirect('/');
});

// Handle task completion (GET /completed/:task)
app.get('/completed/:task', (req, res) => {
    const taskCompleted = tasks.find(task => task.task === req.params.task);
    if (taskCompleted) {
        taskCompleted.completed = !taskCompleted.completed;  // Toggle completed status

        // Reorder tasks: completed tasks should appear at the bottom
        tasks.sort((a, b) => {
            if (a.completed === b.completed) return 0;
            return a.completed ? 1 : -1;  // Sort completed tasks first
        });
    }
    res.redirect('/');
});

// Serve the tasks in JSON format for the frontend to fetch (GET /tasks)
app.get('/tasks', (req, res) => {
    console.log('Sending tasks to client:', tasks);  // Log tasks when sending to client
    res.json(tasks);  // Send the tasks array as JSON
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
