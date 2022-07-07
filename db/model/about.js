const seq = require("../connection/index");
const { INT, STRING } = require("../types");

const About = seq.define("About", {
    posterUrl: {
        type: STRING,
    },
    title: {
        type: STRING,
    },
    name: {
        type: STRING,
    },
    intro: {
        type: STRING,
    },
    posterKey: {
        type: STRING,
    },
});

About.sync({ force: true });

module.exports = About;