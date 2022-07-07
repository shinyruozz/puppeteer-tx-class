const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const Agency = seq.define("Agency", {
    logoUrl: {
        type: STRING,
        // unique: true,
        comment: "logo链接地址",
    },
    name: {
        type: STRING,
        allowNull: false,
        comment: "机构名称",
    },
    feedbackRate: {
        type: STRING,
        comment: "机构反馈",
    },
    studentCount: {
        type: INT,
        comment: "学生数量",
    },
    description: {
        type: STRING,

        comment: "机构描述",
    },
    logoKey: {
        type: STRING,

        comment: "上传图片值",
    },
});

Agency.sync({ force: true });

module.exports = Agency;