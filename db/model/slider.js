const seq = require("../connection/index");
const { INT, STRING, BOOLEAN } = require("../types");

const Slider = seq.define(
    "Slider", {
        cid: {
            type: STRING,
            allowNull: false,
            unique: true,
            comment: "图片 唯一标识",
        },
        href: {
            type: STRING,
            allowNull: false,
            comment: "图片链接",
        },
        imgUrl: {
            type: STRING,
            allowNull: false,
            unique: true,
            comment: "图片地址",
        },
        imgKey: {
            type: STRING,
            allowNull: false,
            unique: true,
            comment: "上传图片地址",
        },
        title: {
            type: STRING,
            comment: "图片标题",
        },
        state: {
            type: BOOLEAN,
            defaultValue: 1,
            comment: "图片状态",
        },
    }, {
        timestamps: true,
        paranoid: true,
    }
);

Slider.sync({ force: true });

module.exports = Slider;