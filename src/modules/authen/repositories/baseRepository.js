class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(model) {
        try {
            let newObj = new this.model(model);
            const results = await newObj.save();
            return results;
        } catch(err) {
            throw err;
        }
        
    }

    async update(id, userModel) {

    }

    async delete(id) {

    }

    async find(param) {
        try {
            const result = await this.model.find(param);
            return result;
        } catch(err) {
            throw err;
        }
    }

    async findOne(param) {
        try {
            const result = await this.model.findOne(param);
            return result;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = BaseRepository;