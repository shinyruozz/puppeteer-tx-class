const courseTabModel = require("../db/model/courseTab");
class CourseTabService {
    async createCourseTab(data) {
        const cid = data.cid;
        const res = await courseTabModel.findOne({
            where: { cid },
        });
        if (res) {
            return await courseTabModel.update(data, { where: { cid } });
        }

        return await courseTabModel.create(data);
    }
}

module.exports = new CourseTabService();