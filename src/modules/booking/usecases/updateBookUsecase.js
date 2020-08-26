const utils = require('../../../utils')
const Error = require('../errors')
const Result = require('../result')
const Log = require('../../../services/writeLogService');

class UpdateBookUseCase {
    constructor(repo, proposeDateRepo, db, statusRepo){
        this.repo = repo;
        this.proposeDateRepo = proposeDateRepo;
        this.statusRepo = statusRepo;
        this.db = db;
    }

    async execute(req, res) {
        let transaction;
        let result = {};
        try {
            const {_id, updatedAt, ...rest} = req.body;
            if(updatedAt) {
                const booking = await this.repo.findOne({_id});
                if(booking && new Date(booking.updatedAt).getTime() != new Date(updatedAt).getTime()) {
                    return new Error(200, 'You\'re using old data. Please refresh to get latest data', {})
                }
            }
            if(rest) {
                
                // transaction = await this.db.beginTransaction();
                const {propose_date, ...rest1} = rest;
                if(propose_date) {
                    if(req.user.role == 'user')
                        return new Error(400, 'You\'re cheating', {})
                    await this.proposeDateRepo.update({_id: propose_date}, {choose: true});
                }
                if(rest1 && rest1.status) {
                    const status = await this.statusRepo.findOne({_id: rest1.status});
                    if(req.user.role == 'user' && status && status.name == 'Approved')
                        return new Error(400, 'You\'re cheating', {})
                    result = await this.repo.update({_id}, {status: rest1.status});
                }
                
                // await this.db.commitTransaction(transaction);
            }
            
            return new Result(200, 'success', {result})
        } catch(err) {
            if(transaction)
                await this.db.rollbackTransaction(transaction);
            Log.writeLog(err.message)
            return new Error(500, 'Error when processing request');
        }
    }
}

module.exports = UpdateBookUseCase;