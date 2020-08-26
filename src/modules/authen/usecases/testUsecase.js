const utils = require('../../../utils');
const Error = require('../errors');
const User = require('../models');
const Result = require('../result');
const jwt = require('jsonwebtoken');
const config = require('../../../../config');
const Log = require('../../../services/writeLogService');
const Hash = require('../../../services/encryptService');

class TestUseCase {
    
    constructor(repo, repoTest, repoTest1) {
        this.repo = repo;
        this.repoTest = repoTest;
        this.repoTest1 = repoTest1;
    }

    async execute(req, res) {
        try {
            
            const arrStatues = ['Pending Review', 'Approved', 'Rejected'];
            for(let status of arrStatues) {
                await this.repoTest1.statusRepository.create({name: status});
            }

            const arrEvents = ['Event1', 'Event2', 'Event3'];
            for(let event of arrEvents) {
                await this.repoTest1.eventRepository.create({name: event})
            }

            return new Result(200, 'Success', {})
        } catch(err) {
            Log.writeLog(err.message);
            return new Error(500, err.message);
        }
    }
}

module.exports = TestUseCase;