const tasks = require('./../controllers/tasks');

module.exports = function(app) {

    // Retrieve all Tasks    
    app.get('/tasks', function(req, res) {
        tasks.getTasks(req, res);
    })

   // Retrieve task by id
    app.get('/:id', function(req, res) {
        tasks.getTask(req, res);
    })

    // Create a task
    app.post('/create', function(req, res) {
        tasks.addTask(req, res);
    })

    // Update a task by ID
    app.put('/update/:id', function(req, res) {
        tasks.updateTask(req, res);
    })

    // Delete task by ID
    app.delete('/delete/:id', function(req, res) {
        tasks.deleteTask(req, res);
    })
}

