const BaseRepository = require('./baseRepository')
class UserRepository extends BaseRepository {
    
    async find(param) {
        try {
            const result = await this.model.find(param).populate('role');
            return result;
        } catch(err) {
            throw err;
        }
    }

    async findOne(param) {
        try {
            const result = await this.model.findOne(param).populate('role');
            return result;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = UserRepository;