const tasks = require('./../controllers/tasks');

module.exports = function(app) {

    // Retrieve all Tasks    
    app.get('/tasks', function(req, res) {
        tasks.getTasks(req, res);
    })

   // Retrieve task by id
    app.get('/task/:id', function(req, res) {
        console.log('in routes')
        tasks.getTask(req, res);
    })

    // Create a task
    app.post('/task', function(req, res) {
        console.log('inside routes')
        tasks.addTask(req, res);
    })

    // Update a task by ID
    app.put('/update/:id', function(req, res) {
        console.log('In routes')
        console.log(`ID: ${req.params}`)
        tasks.updateTask(req, res);
    })

    // Delete task by ID
    app.delete('/delete/:id', function(req, res) {
        console.log("Req param:",req.params)
        tasks.deleteTask(req, res);
    })
}

