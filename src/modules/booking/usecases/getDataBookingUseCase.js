const utils = require('../../../utils')
const Error = require('../errors')
const Result = require('../result')
const Log = require('../../../services/writeLogService');

class GetDataBookingUsecase {
    constructor(repoEvent, repoStatus){
        this.repoEvent = repoEvent;
        this.repoStatus = repoStatus;
    }

    async execute(req, res) {
        try {
            const events = await this.repoEvent.findAll();
            const statuses = await this.repoStatus.findAll();
            return new Result(200, 'success', {events, statuses})
        } catch(err) {
            Log.writeLog(err.message)
            return new Error(500, err.message);
        }
    }
}

module.exports = GetDataBookingUsecase;