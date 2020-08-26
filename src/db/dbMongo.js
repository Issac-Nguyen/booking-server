const mongoose = require('mongoose');
const config = require('../../config');
const Log = require('../services/writeLogService');
const { startSession } = require('mongoose')

class DB {
    constructor(uri) {
        this.uri = uri;
    }

    init() {
        return mongoose.connect(this.uri, {useNewUrlParser: true});
    }

    execute(query, model, connection) {
            if(connection) {
                return new Promise((resolve, reject) => {
                    connection.query(query, model, function (error, results, fields) {
                        if (error) {
                            console.log("ERROR: " + error.message);
                            return reject(error);
                        }
                    resolve(results);
                    });
            });
            } else {
                return new Promise((resolve, reject) => {
                this.pool.getConnection(function(err, connection) {
                    if (err) {
                        console.log("ERROR: " + err.message);
                        return reject(err);
                    }
                    connection.query(query, model, function (error, results, fields) {
                        if (err) {
                            console.log("ERROR: " + err.message);
                            return reject(err);
                        }
                      connection.release();
                      resolve(results);
                    });
                  });
                });
            }
    }

    async beginTransaction() {
        const session = await startSession();
        session.startTransaction();
        return session;
    }

    async commitTransaction(transaction) {
        try {
            await transaction.commitTransaction();
            await transaction.endSession();
        } catch(err) {
            return err;
        }
    }

    async rollbackTransaction(transaction) {
        try{
            await transaction.abortTransaction();
            await transaction.endSession();
        } catch(err) {
            return err;
        }
    }
}

module.exports = new DB(config.db.mongoDB.uri);