module.exports = function(app){
    var todoList = require('../controller/controller')
    app.route('/tasks')
      .get(todoList.get_all_tasks)
      .post(todoList.create_a_task);
    app.route('/tasks/:id')
      .get(todoList.read_a_task)
		  .put(todoList.update_a_task)
		  .delete(todoList.delete_a_task);

}
