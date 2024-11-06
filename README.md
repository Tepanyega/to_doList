sgrfejhrs
# To-Do List Application

A simple **To-Do List** web application built with **Node.js**, **Express**, and **EJS** for rendering views. The app allows users to add, complete, and delete tasks, providing a simple way to track daily activities.

## Features

- Add tasks to the to-do list.
- Mark tasks as completed.
- Delete tasks from the list.
- Stylish, user-friendly interface.
- Tasks are stored in memory (can be extended for persistent storage).

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web application framework for Node.js.
- **EJS**: Embedded JavaScript templating engine for rendering views.
- **Font Awesome**: Icons for tasks (e.g., delete and complete buttons).
- **CSS**: Custom styles for the front-end.

## Prerequisites

Before running the app, ensure you have the following installed:

- **Node.js** (version 14.x or later)
- **npm** (Node Package Manager, comes with Node.js)

## Getting Started

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/to-do-list.git
```

### 2. Install dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd to-do-list
npm install
```

### 3. Start the server

Run the following command to start the Node.js server:

```bash
npm start
```

The application should now be running on [http://localhost:3000](http://localhost:3000).

### 4. Open in your browser

Open your browser and go to `http://localhost:3000` to start using the to-do list app.

## How It Works

1. **Add Task**: Enter a new task in the input field and click **Add Task** to add it to the list.
2. **Complete Task**: Click **Complete** next to any task to mark it as completed. This will strike through the task text.
3. **Delete Task**: Click the trash can icon next to a task to delete it from the list.

## File Structure

Here’s a quick overview of the project structure:

```
to-do-list/
├── node_modules/            # Dependencies
├── public/                  # Public files like CSS, images, etc.
│   └── css/
│       └── style.css        # Custom styles for the app
├── views/                   # EJS view templates
│   └── index.ejs            # Main page with to-do list rendering
├── app.js                   # Main application file (Express app)
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Lock file for npm dependencies
└── README.md                # This file
```

## Screenshots

**Task List**:
![Task List Screenshot](screenshots/task-list.png)

**Completed Task**:
![Completed Task Screenshot](screenshots/completed-task.png)

## Contributing

If you'd like to contribute to this project, feel free to fork it and submit a pull request. You can also open an issue for any bugs or feature requests.

### How to Contribute:

1. Fork the repository.
2. Clone your fork to your local machine.
3. Create a new branch for your changes.
4. Make your changes and commit them.
5. Push the changes to your fork.
6. Submit a pull request.
