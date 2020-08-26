const BaseRepository = require('./baseRepository');
class BookingRepository extends BaseRepository{
    constructor(model, modelPropose) {
        super(model);
    }
    async findAll(condition) {
        try{
            const results = await this.model.find(condition).populate('event').populate('status');
            return results;
        } catch(err) {
            throw err;
        }
    }

    async findWithPage(condition, page, limit) {
        try{
            const results = await this.model.find(condition).skip((page -1) * limit).limit(limit).populate('event').populate('status');
            return results;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = BookingRepository;