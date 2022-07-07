const studentModel = require("../db/model/student");
class StudentService {
    async createStudent(data) {
        const sid = data.sid;
        const res = await studentModel.findOne({
            where: { sid },
        });
        if (res) {
            return await studentModel.update(data, { where: { sid } });
        }

        return await studentModel.create(data);
    }
}

module.exports = new StudentService();