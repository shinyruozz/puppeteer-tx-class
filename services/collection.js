const collectionModel = require("../db/model/collection");
class CollectionService {
    async createCollection(data) {
        const cid = data.cid;

        const res = await collectionModel.findOne({
            where: { cid },
        });
        if (res) {
            return await collectionModel.update(data, { where: { cid } });
        }

        return await collectionModel.create(data);
    }
}

module.exports = new CollectionService();