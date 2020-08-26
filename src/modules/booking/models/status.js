var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StatusSchema = new Schema({
    name: String
  }, { timestamps: true });

var Status = mongoose.model('status', StatusSchema);

module.exports = Status;