var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProposeSchema = new Schema({
    propose_date: Date,
    booking_id: { type: 'ObjectId', ref: 'booking' },
    choose: Boolean
  }, { timestamps: true });

var Propose = mongoose.model('propose', ProposeSchema);

module.exports = Propose;