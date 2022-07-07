const RecomCourseModel = require("../db/model/recomCourse");
class RecomCourseService {
    async createRecomCourse(data) {
        const cid = data.cid;

        const res = await RecomCourseModel.findOne({
            where: { cid },
        });
        if (res) {
            return await RecomCourseModel.update(data, { where: { cid } });
        }

        return await RecomCourseModel.create(data);
    }
}

module.exports = new RecomCourseService();