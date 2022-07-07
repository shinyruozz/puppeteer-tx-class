const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const Course = seq.define("Course", {
    cid: {
        type: INT,
        unique: true,
        allowNull: false,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    href: {
        type: STRING,
        allowNull: false,
    },
    posterImg: {
        type: STRING,
    },
    price: {
        type: STRING,
    },
    studentCount: {
        type: INT,
    },
    field: {
        type: INT,
    },
    posterKey: {
        type: STRING,
    },
    state: {
        type: INT,
        defaultValue: 1,
    },
});

Course.sync({ force: true });

module.exports = Course;