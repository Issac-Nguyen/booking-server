var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username:  {type: String, index: true},
    password: String,
    role: { type: 'ObjectId', ref: 'role' }
  }, { timestamps: true });

var User = mongoose.model('user', userSchema);

module.exports = User;