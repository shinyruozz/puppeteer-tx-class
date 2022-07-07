const aboutModel = require("../db/model/about");
class AboutService {
    async createAbout(data) {
        const id = 0;
        const res = await aboutModel.findOne({
            where: { id },
        });
        if (res) {
            return await aboutModel.update(data, { where: { id } });
        }

        return await aboutModel.create(data);
    }
}

module.exports = new AboutService();