const Error = require('../errors');
const Result = require('../result');
const config = require('../../../../config');
const Log = require('../../../services/writeLogService');

class GetAllUseCase {
    
    constructor(repo, repoPropose) {
        this.repo = repo;
        this.repoPropose = repoPropose
    }

    async execute(req, res) {
        try {
            const {page} = req.query;
            let bookings = await this.repo.findWithPage({}, page ? page : 1, config.itemPerPage);
            let results = [];
            bookings.map(async (booking) => {
                let item = {};
                item._id = booking._id;
                item.location = booking.location;
                item.event = booking.event;
                item.status = booking.status;
                item.updatedAt = booking.updatedAt;
                const propose_date = await this.repoPropose.findAll({booking_id: booking._id});
                item.propose_date = propose_date
                results.push(item);
                return booking;
            })
            let count = await this.repo.countPage();
            const objectReturn = {
                bookings: results,
                totalPages: Math.ceil(count/config.itemPerPage),
                totalItems: count
            }
            return new Result(200, 'success', objectReturn)
        } catch(err) {
            Log.writeLog(err.message)
            return new Error(500, err.message);
        }
    }
}

module.exports = GetAllUseCase;