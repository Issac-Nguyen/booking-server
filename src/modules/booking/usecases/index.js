const GetBookingUsecase = require('./getBookingUsecase');
const NewBookingUseCase = require('./newBookingUsecase');
const GetStatusUseCase = require('./getStatusUsecase');
const GetEventUseCase = require('./getEventUseCase');
const UpdateBookUseCase = require('./updateBookUsecase');
const GetDataBookingUseCase = require('./getDataBookingUseCase');
const db = require('../../../db');

const repositories = require('../repositories');

const getBookingUsecase = new GetBookingUsecase(repositories.bookingRepository, repositories.proposeRepository);
const getStatusUseCase = new GetStatusUseCase(repositories.statusRepository);
const getEventUseCase = new GetEventUseCase(repositories.eventRepository);
const newBookingUseCase = new NewBookingUseCase(repositories.bookingRepository, repositories.proposeRepository, db);
const updateBookUseCase = new UpdateBookUseCase(repositories.bookingRepository, repositories.proposeRepository, db);
const getDataBookingUseCase = new GetDataBookingUseCase(repositories.eventRepository, repositories.statusRepository);

module.exports = {
    getBookingUsecase,
    getStatusUseCase,
    getEventUseCase,
    newBookingUseCase,
    updateBookUseCase,
    getDataBookingUseCase
}
