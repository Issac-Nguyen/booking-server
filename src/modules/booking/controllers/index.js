const GetBookingController = require('./getBookingController');
const GetStatusController = require('./getStatusController');
const GetEventController = require('./getEventController');
const BookController = require('./bookController');
const UpdateBookController = require('./updateBookController');
const GetDataBookingController = require('./getDataBookingController')

const useCases = require('../usecases');

const getBookingController = new GetBookingController(useCases.getBookingUsecase);
const getStatusController = new GetStatusController(useCases.getStatusUseCase);
const getEventController = new GetEventController(useCases.getEventUseCase);
const bookController = new BookController(useCases.newBookingUseCase);
const updateBookController = new UpdateBookController(useCases.updateBookUseCase);
const getDataBookingController = new GetDataBookingController(useCases.getDataBookingUseCase);

module.exports = {
    getBookingController,
    getStatusController,
    getEventController,
    bookController,
    updateBookController,
    getDataBookingController
}