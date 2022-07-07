const SliderModel = require("../db/model/slider");
class SliderService {
    async createSlider(data) {
        const cid = data.cid;
        const res = await SliderModel.findOne({ where: { cid } });
        if (res) {
            return await SliderModel.update(data, { where: { cid } });
        } else {
            return await SliderModel.create(data);
        }
    }
}

module.exports = new SliderService();