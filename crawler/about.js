const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.course,
    evaluate() {
        const $ = window.$,
            $item = $(".agency-about");

        return {
            posterUrl: $item
                .find(".about-banner-pic0")
                .css("background-image")
                .match(/\"(.+?)\"/)[1],
            name: $item.find(".about-agency-name").text(),
            title: $item.find(".about-agency-propagate").text(),
            intro: $item.find(".about-agency-intr").text().replace(/\s/g, ""),
            posterKey: "",
        };
    },
});