const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.course,
    evaluate() {
        const $ = window.$,
            $item = $(".course-tab-filter-item"),
            data = [];

        $item.each((index, ele) => {
            $el = $(ele);

            let dataItem = {
                cid: index,
                title: $el.text().replace("促", ""),
            };
            data.push(dataItem);
        });

        return data;
    },
});