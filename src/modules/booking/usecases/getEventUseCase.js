const utils = require('../../../utils')
const Error = require('../errors')
const Result = require('../result')
const Log = require('../../../services/writeLogService');

class GetEventUsecase {
    constructor(repo){
        this.repo = repo;
    }

    async execute(req, res) {
        try {
            const statuses = await this.repo.findAll({});
            return new Result(200, 'success', {statuses})
        } catch(err) {
            Log.writeLog(err.message)
            return new Error(500, err.message);
        }
    }
}

module.exports = GetEventUsecase;