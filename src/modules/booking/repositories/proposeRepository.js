const BaseRepository = require('./baseRepository');
class ProposeDateRepository extends BaseRepository{
    async findAll(condition) {
        try{
            const results = await this.model.find(condition);
            return results;
        } catch(err) {
            throw err;
        }
    }

    async findWithPage(condition, page, limit) {
        try{
            const results = await this.model.find(condition).skip(page -1 * limit).limit(limit).populate('booking');

            return results;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = ProposeDateRepository;