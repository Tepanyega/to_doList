document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('todo-list');

    // Fetch tasks from the server and render them
    const fetchTasks = async () => {
        try {
            const response = await fetch('/tasks');
            const tasks = await response.json();
            console.log('Fetched tasks:', tasks);  // Debugging output
            renderTasks(tasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };

    // Render tasks
    const renderTasks = (tasks) => {
        taskList.innerHTML = '';  // Clear the task list before rendering
        tasks.forEach(task => {
            console.log('Rendering task:', task);  // Debugging output for each task

            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';

            li.innerHTML = `
                <span>${task.task}</span>
                <span class="timestamp">${task.timestamp ? task.timestamp : 'No Timestamp'}</span> <!-- Display timestamp -->
                <a href="/completed/${task.task}">
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                </a>
                <a href="/delete/${task.task}">
                    <i class="fas fa-trash-alt delete-icon"></i>
                </a>
            `;
            taskList.appendChild(li);
        });
    };

    // Handle new task creation
    document.getElementById('task-form').addEventListener('submit', async (event) => {
        event.preventDefault();  // Prevent form from submitting the traditional way
        const taskInput = document.getElementById('task-input');
        const task = taskInput.value.trim();

        if (task) {
            try {
                const response = await fetch('/add', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `task=${task}`,
                });

                if (response.ok) {
                    taskInput.value = '';  // Clear the input field
                    fetchTasks();  // Refresh the task list
                } else {
                    console.error('Failed to add task');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    });

    // Initial task fetching
    fetchTasks();
});
