document.addEventListener('DOMContentLoaded', () => {
    const activeTaskList = document.getElementById('todo-list');
    const completedTaskList = document.getElementById('completed-list');

    // Fetch tasks from the server and render them
    const fetchTasks = async () => {
        const response = await fetch('/tasks');
        const tasks = await response.json();
        console.log('Fetched tasks:', tasks);  // Debugging output
        renderTasks(tasks);
    };

    // Render tasks into active and completed lists
    const renderTasks = (tasks) => {
        activeTaskList.innerHTML = '';  // Clear the active task list
        completedTaskList.innerHTML = '';  // Clear the completed task list

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.innerHTML = `
                <span>${task.task}</span>
                <span class="timestamp">${task.timestamp}</span>
                <a href="/completed/${task.task}">
                    <button class="complete-btn">${task.completed ? 'Undo' : 'Complete'}</button>
                </a>
                <a href="/delete/${task.task}">
                    <i class="fas fa-trash-alt delete-icon"></i>
                </a>
            `;

            // Append to the appropriate list (active or completed)
            if (task.completed) {
                completedTaskList.appendChild(li);
            } else {
                activeTaskList.appendChild(li);
            }
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
