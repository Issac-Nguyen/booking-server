const BookingRepository = require('./bookingRepository');
const EventRepository = require('./eventRepository');
const ProposeRepository = require('./proposeRepository');
const StatusRepository = require('./statusRepository');
const db = require('../../../db');
const model = require('../models');

const bookingRepository = new BookingRepository(model.Booking);
const eventRepository = new EventRepository(model.Event);
const proposeRepository = new ProposeRepository(model.Propose);
const statusRepository = new StatusRepository(model.Status);


module.exports = {
    bookingRepository,
    eventRepository,
    proposeRepository,
    statusRepository
}
