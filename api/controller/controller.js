
task = require('mongoose').model('task')

exports.get_all_tasks = function(req, res){
    task.find({}, function(err, data){
        if(err) throw err
        res.json(data)
    })
}
exports.create_a_task = function(req, res){
    var new_task = new task(req.body);
  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
exports.read_a_task = function(req, res){
    task.findById(req.params.taskid, function(err, data){
        if(err) throw err
        res.json(data)
    })
};

exports.update_a_task = function (req, res){
  task.findByIdAndUpdate(req.params.taskid, req.body, {new: true}, function(err, data){
    if (err) throw err
    res.json(data)
  })
}
exports.delete_a_task = function(req, res){
  task.findByIdAndDelete(req.params.taskid, function(err){
    if(err) throw err
    res.send("deleted")
  })
}
