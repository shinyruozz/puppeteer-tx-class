const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const Student = seq.define("Student", {
    sid: {
        type: INT,
        allowNull: false,

        unique: true,
    },

    studentName: {
        type: STRING,
        allowNull: false,
    },
    studentImg: {
        type: STRING,
    },
    intro: {
        type: STRING,
    },
    courseLink: {
        type: STRING,
    },
    imgKey: {
        type: STRING,
    },
});

Student.sync({ force: true });

module.exports = Student;