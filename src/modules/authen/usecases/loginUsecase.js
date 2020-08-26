const utils = require('../../../utils');
const Error = require('../errors');
const User = require('../models');
const Result = require('../result');
const jwt = require('jsonwebtoken');
const config = require('../../../../config');
const Log = require('../../../services/writeLogService');

class LoginUseCase {
    
    constructor(repo) {
        this.repo = repo;
    }

    async execute(req, res) {
        const {username, password} = req.body;
        try {
            const user = await this.repo.findOne({username});
            if(user) {
                if(await utils.samePassword(user, password)) {
                    
                    const payload = { username, role: user.role.name };
                    // req.body.time = new Date().getTime();
                    const token = jwt.sign(payload, config.secrecKey, {
                      expiresIn: '1h'
                    });
                    // console.log('token', token)
                    return new Result(200, 'Success', {token, role: user.role.name, username: user.username})
                } else {
                    return new Error(200, 'Incorect username or password') 
                }
            } else {
                return new Error(200, 'Incorect username or password')
            }
        } catch(err) {
            Log.writeLog(err.message);
            return new Error(500, err.message);
        }
    }
}

module.exports = LoginUseCase;