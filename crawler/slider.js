const crawler = require("../libs/crawler");
const { crawlerUrl } = require("../config/conf");

crawler({
    url: crawlerUrl.home,
    evaluate() {
        const $ = window.$,
            $item = $(".agency-big-banner-ul").find(".agency-big-banner-li");
        let data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $elLink = $el.find(".js-banner-btnqq");

            const dataItem = {
                cid: $elLink.attr("data-id"),
                href: $elLink.prop("href"),
                imgUrl: $elLink.find("img").prop("src"),
                title: $elLink.prop("title"),
                imgKey: "",
            };

            data.push(dataItem);
        });
        return data;
    },
});