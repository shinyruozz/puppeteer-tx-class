const puppeteer = require("puppeteer");

module.exports = async(options) => {
    const bs = await puppeteer.launch(),
        pg = await bs.newPage(),
        url = options.url;

    await pg.goto(url, {
        timeout: 30 * 1000,
        waitUntil: "networkidle2",
    });

    const result = await pg.evaluate(options.evaluate);

    await bs.close();

    process.send(result);

    setTimeout(() => {
        process.exit(0);
    }, timeout);
};