const { Sequelize } = require("sequelize");

const { mysql } = require("../../config/mysql.config");

const seq = new Sequelize(...mysql.conf, mysql.base);

seq.authenticate()
    .then((res) => {
        console.log("ok");
    })
    .catch((e) => {
        console.log("err", e);
    });

module.exports = seq;