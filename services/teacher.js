const teacherModel = require("../db/model/teacher");
class TeacherService {
    async createTeacher(data) {
        const tid = data.tid;
        const res = await teacherModel.findOne({
            where: { tid },
        });
        if (res) {
            return await teacherModel.update(data, { where: { tid } });
        }

        return await teacherModel.create(data);
    }
}

module.exports = new TeacherService();