const router = require("koa-router")();

const {
    crawlSliderData,
    crawlAgencyData,
    crawlRecomData,
    crawlCollectionData,
    crawlTeacherData,
    crawlStudentData,
    crawlCourseTabData,
    crawlCourseData,
    crawlAboutData,
} = require("../controllers/crawler");

router.prefix("/crawler");

router.get("/slider", crawlSliderData);
router.get("/agency", crawlAgencyData);
router.get("/recom-sourse", crawlRecomData);
router.get("/collection", crawlCollectionData);
router.get("/teacher", crawlTeacherData);
router.get("/student", crawlStudentData);
router.get("/course-tab", crawlCourseTabData);
router.get("/course", crawlCourseData);
router.get("/about", crawlAboutData);
module.exports = router;