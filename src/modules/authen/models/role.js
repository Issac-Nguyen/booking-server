var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roleSchema = new Schema({
    name:  {type: String, index: true}
  }, { timestamps: true });

var Role = mongoose.model('role', roleSchema);

module.exports = Role;