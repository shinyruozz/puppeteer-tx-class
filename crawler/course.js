const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.course,
    evaluate() {
        const $ = window.$,
            $item = $(".course-card-list .course-card-item"),
            data = [];

        $item.each((index, ele) => {
            $el = $(ele);
            const price = $el.find(".item-price").text();
            let dataItem = {
                cid: $el.find(".item-img-link").attr("data-id"),
                href: $el.find(".item-img-link").prop("href"),
                posterImg: $el.find(".item-img").prop("src"),
                title: $el.find(".item-tt-link").prop("title"),
                price: price == "免费" ? "0" : price.substring(1),
                studentCount: parseInt($el.find(".item-user--right").text()),
                field: -1,
                posterKey: "",
            };
            data.push(dataItem);
        });

        return data;
    },
});