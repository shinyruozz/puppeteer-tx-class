const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.home,
    evaluate() {
        const $ = window.$,
            $agency = $(".agency-head"),
            $info = $agency.find(".ag-info"),
            data = {};

        data.logoUrl = $agency.find(".agency-head-logo").prop("src");
        data.name = $agency.find(".js-agency-info-name").text();
        data.feedbackRate = $info
            .children()
            .eq(0)
            .text()
            .replace(/[^0-9]/gi, "");

        data.studentCount = $info.find(".js-item-num").attr("data-num");
        data.description = $info.find(".ag-info-des").text();
        data.qqLink = $info.find(".ag-info-btn").prop("src");
        data.logoKey = "";

        return data;
    },
});