
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Kindly enter the name of the task']
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['xong', 'chua xong']
    }],
    default: ['chua xong']
  }
});


module.exports = mongoose.model('task', TaskSchema);