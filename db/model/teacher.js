const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const Teacher = seq.define("Teacher", {
    tid: {
        type: INT,
        allowNull: false,

        unique: true,
    },
    href: {
        type: STRING,
        allowNull: false,
        comment: "链接地址",
    },
    teacherName: {
        type: STRING,
        allowNull: false,
    },
    teacherImg: {
        type: STRING,
    },
    intro: {
        type: STRING,
    },
    courseCount: {
        type: INT,
    },
    studentCount: {
        type: INT,
    },
    imgKey: {
        type: STRING,
    },
    state: {
        type: INT,

        defaultValue: 1,
    },
});

Teacher.sync({ force: true });

module.exports = Teacher;