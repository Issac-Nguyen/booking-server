module.exports = {
    secrecKey: 'NHJUYTB',
    db: {
        mySQL: {
            host: 'remotemysql.com',
            user: 'w4eQfRqZpg',
            password: 't2uzDXCyOB',
            dbName: 'w4eQfRqZpg'
        },
        mongoDB: {
            uri: "mongodb+srv://jupitern8:123@cluster0.sv8ga.mongodb.net/booking?retryWrites=true&w=majority"
            // uri: "mongodb://localhost/booking"
        }
        
    },
    itemPerPage: 1,
    logFileLocation: './logs',
    saltRounds: 10
}