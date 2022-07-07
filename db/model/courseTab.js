const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const CourseTab = seq.define("CourseTab", {
    cid: {
        type: INT,
        unique: true,
        allowNull: false,
    },
    title: {
        type: STRING,
        allowNull: false,
    },
    state: {
        type: INT,
        defaultValue: 1,
    },
});

CourseTab.sync({ force: true });

module.exports = CourseTab;