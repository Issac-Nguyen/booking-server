const utils = require('../../../utils');
const Error = require('../errors');
const Result = require('../result');
const { uuid } = require('uuidv4');
const Log = require('../../../services/writeLogService');

class NewBookingUseCase {
    constructor(repo, repoProposeDate, db) {
        this.repo = repo;
        this.repoProposeDate = repoProposeDate;
        this.db = db;
    }

    async execute(req, res) {
        const {event, location, propose_date, status} = req.body;


            let transaction;
            try {
                transaction = await this.db.beginTransaction();
                const newBooking = await this.repo.create({event, location, status}, transaction);
                // const newBooking = await this.repo.create({event, location, status});
                for(let item of propose_date) {
                    const objectInsert = {booking_id: newBooking._id, propose_date: item};
                    const proposeDate = await this.repoProposeDate.create(objectInsert, transaction);
                    // const proposeDate = await this.repoProposeDate.create(objectInsert);
                }
                
                await this.db.commitTransaction(transaction);

                return new Result(200, 'success', newBooking);
            } catch (err) {
                console.log(err);
                try {
                    if(transaction)
                    await this.db.rollbackTransaction(transaction);
                } catch(err) {
                    Log.writeLog(err)
                    return new Error(500, 'Error when processing request');
                }
               
                Log.writeLog(err)
                return new Error(500, 'Error when processing request');
            }
    }
}

module.exports = NewBookingUseCase;