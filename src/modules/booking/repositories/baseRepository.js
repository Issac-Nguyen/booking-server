class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async create(modelData, transaction) {
        try{
            const newObject = new this.model(modelData);
            if(transaction)
                await newObject.save({session: transaction})
            else
                await newObject.save();
            return newObject;
        } catch(err) {
            throw err;
        }
    }

    async update(condition, valueUpdate, transaction) {
        try {
            if(transaction)
                return await this.model.updateMany(condition, valueUpdate, {session: transaction});
            else
                return await this.model.updateMany(condition, valueUpdate);
        } catch(err) {
            throw err;
        }
    }

    async findAll(condition) {
        try{
            const results = await this.model.find(condition);
            return results;
        } catch(err) {
            throw err;
        }
    }

    async findOne(condition) {
        try {
            const result = await this.model.findOne(condition);
            return result;
        } catch(err) {
            throw err;
        }
    }

    async findWithPage(condition, page, limit) {
        try{
            const results = await this.model.find(condition).skip(page -1 * limit).limit(limit);

            return results;
        } catch(err) {
            throw err;
        }
    }

    async countPage(condition, params) {
        try{
           const count = await this.model.countDocuments(condition);

            return count;
        } catch(err) {
            throw err;
        }
    }
}

module.exports = BaseRepository;