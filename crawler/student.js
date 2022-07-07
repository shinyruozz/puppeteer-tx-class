const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.home,
    evaluate() {
        const $ = window.$,
            $item = $(".stu"),
            data = [];

        $item.each((index, ele) => {
            $el = $(ele);
            const $face = $el.find(".stu-face");
            let dataItem = {
                sid: index + 1,
                studentName: $el.find(".stu-main h4").text(),
                studentImg: $face.find(".stu-img").prop("src"),
                intro: $el.find(".stu-main-cnt ").text().replace(/\s/g, ""),
                courseLink: $el.find(".stu-main-tit").prop("href"),
                imgKey: "",
            };
            data.push(dataItem);
        });

        return data;
    },
});