const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.teacher,
    evaluate() {
        const $ = window.$,
            $item = $(".tea"),
            data = [];

        $item.each((index, ele) => {
            $el = $(ele);
            const $face = $el.find(".tea-face");
            let dataItem = {
                tid: index + 1,
                href: $face.prop("href"),
                teacherName: $face.attr("title"),
                teacherImg: "https:" + $el.find("img").attr("lazy-src"),
                intro: $el.find(".tea-main-cnt").text(),
                courseCount: Number($el.find(".tea-main-sub span").eq(0).attr("title")),
                studentCount: Number(
                    $el
                    .find(".tea-main-sub span")
                    .eq(1)
                    .text()
                    .replace(/[^0-9]/gi, "")
                ),
                imgKey: "",
            };
            data.push(dataItem);
        });

        return data;
    },
});