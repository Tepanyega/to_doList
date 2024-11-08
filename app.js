const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//set the ejs engine
app.set('view engine', 'ejs');

//use body parser middleware

app.use(bodyParser.urlencoded({ extended: true }));

//serve static files from the public folder

app.use(express.static('public'));

//in memory storage for tasks

let tasks = [];

//server the ejs template with tasks

app.get('/', (req, res) => {
    console.log(tasks);
    res.render('index', {tasks: tasks});
});

//handle task creation

app.post('/add', (req, res) => {
    const newTask = req.body.task;
    if (newTask){
        tasks.push({task: newTask, completed: false});
        console.log(tasks);
    }
    res.redirect('/');
});

// Handle task deletion

app.get('/delete/:task', (req, res) => {

    console.log(
        `Deleting task: ${req.params.task}`
    );
    tasks = tasks.filter(task => task.task !== req.params.task);
    res.redirect('/');
});

// Handle task completion

app.get('/completed/:task', (req, res) => {
    const taskCompleted = tasks.find(task => task.task === req.params.task);
    if(taskCompleted){
        taskCompleted.completed =!taskCompleted.completed; //toggle completed status

        //reorder tasks
        tasks.sort((a,b) => {
            if(a.completed === b.completed) return 0;
            return a.completed? 1 : -1; //sort completed tasks first
        });
    }
    res.redirect('/');
});

// Start the server

app.listen(3000, () =>{
    console.log('listening to port 3000')
})