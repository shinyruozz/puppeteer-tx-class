const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.home,
    evaluate() {
        const $ = window.$,
            $item = $(".spread-course-ul");
        $spreadCourse = $item.find(".spread-course-cover-wrap");
        const cid = $item
            .find("li")
            .eq(0)
            .attr("report-tdw")
            .match(/\&(.+?)\&/gi)[0]
            .split("=")[1];
        return {
            cid: parseInt(cid),
            href: $spreadCourse.find("a").prop("href"),
            posterUrl: $spreadCourse.find(".spread-course-cover").prop("src"),
            title: $(".agency-spread-wrap h4").text(),
            description: $item.find(".spread-course-des").text(),
            tearcherImg: $item.find(".spread-course-face img").prop("src"),
            tearcherName: $item.find(".spread-course-face span").eq(0).text(),
            studentCount: $item
                .find(".spread-course-face span")
                .eq(1)
                .text()
                .replace(/[^0-9]/gi, ""),
            price: Number(
                $item
                .find(".spread-course-price ")
                .text()
                .replace(/[^0-9]/gi, "")
                .slice(1)
            ),
            posterKey: "",
            tearcherKey: "",
        };
    },
});