var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
    name: String
  }, { timestamps: true });

var Event = mongoose.model('event', EventSchema);

module.exports = Event;