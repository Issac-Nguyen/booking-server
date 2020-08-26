var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
    event:  {type: 'ObjectId', ref: 'event'},
    location: String,
    status: { type: 'ObjectId', ref: 'status' }
  }, { timestamps: true });

var Booking = mongoose.model('booking', BookingSchema);

module.exports = Booking;