const mongoose = require('mongoose'); 
const Task = mongoose.model('Task')

module.exports = {

    // getTasks: (req, res) => {
    //     Task.find()
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
    //   },

    getTasks: function(req, res){
        Task.find({}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: "Error", error: err});
            }else{
                // res.json({message: "Success", tasks: task})
                res.json(task);
            }
        })
    },


    getTask: (req, res) => {
        Task.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    addTask: (req, res) => {
        Task.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
      },

    updateTask: (req, res) => {
        Task.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteTask: (req, res) => {
        Task.findByIdAndRemove({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
      }
}