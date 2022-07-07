const courseModel = require("../db/model/course");
class CourseService {
    async createCourse(data) {
        const cid = data.cid;
        const res = await courseModel.findOne({
            where: { cid },
        });
        if (res) {
            return await courseModel.update(data, { where: { cid } });
        }

        return await courseModel.create(data);
    }
}

module.exports = new CourseService();