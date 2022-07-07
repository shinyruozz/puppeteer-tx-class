const { startProcess, qiniuUpload } = require("../libs/utils");
const { buckets } = require("../config/qiniu.config");
const { createSlider } = require("../services/slider");
const { createAgency } = require("../services/agency");
const { createRecomCourse } = require("../services/recomCourse");
const { createCollection } = require("../services/collection");
const { createTeacher } = require("../services/teacher");
const { createStudent } = require("../services/student");
const { createCourseTab } = require("../services/courseTab");
const { createCourse } = require("../services/course");
const { createAbout } = require("../services/about");

class Crawler {
    crawlSliderData() {
        startProcess({
            path: "../crawler/slider.js",
            async message(data) {
                const res = [];
                //上传到七牛云 和本地数据库
                for (let i = 0; i < data.length; i++) {
                    const item = data[i];
                    try {
                        if (item.imgUrl && !item.imgKey) {
                            const result = await qiniuUpload({
                                url: item.imgUrl,
                                bucket: buckets.tx_class_imgs.bucket,
                                ext: ".jpg",
                            });
                            item.imgKey = result.key;

                            const createResult = await createSlider(item);

                            if (createResult) {
                                console.log("成功");
                            } else {
                                console.log("失败");
                            }

                            res.push(item);
                        }
                    } catch (e) {
                        console.log(e);
                    }
                }
                console.log(res);
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlAgencyData() {
        startProcess({
            path: "../crawler/agency.js",
            async message(data) {
                try {
                    const uploadRes = await qiniuUpload({
                        url: data.logoUrl,
                        bucket: buckets.tx_class_imgs.bucket,
                        ext: ".jpg",
                    });

                    data.logoKey = uploadRes.key;
                    const res = await createAgency(data);
                    if (res) {
                        console.log("上传到数据库成功");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlRecomData() {
        startProcess({
            path: "../crawler/recomCourse.js",
            async message(data) {
                try {
                    const posterRes = await qiniuUpload({
                        url: data.posterUrl,
                        bucket: buckets.tx_class_imgs.bucket,
                        ext: ".jpg",
                    });
                    data.posterKey = posterRes.key;
                    const tearchRes = await qiniuUpload({
                        url: data.tearcherImg,
                        bucket: buckets.tx_class_imgs.bucket,
                        ext: ".jpg",
                    });
                    console.log(tearchRes);
                    data.tearcherKey = tearchRes.key;
                    console.log(data);
                    const res = await createRecomCourse(data);
                    if (res) {
                        console.log("上传到数据库成功");
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlCollectionData(ctx) {
        startProcess({
            path: "../crawler/collection.js",
            async message(data) {
                try {
                    for (let i = 0; i < data.length; i++) {
                        const res = await createCollection(data[i]);
                        if (res) {
                            console.log("上传到数据库成功");
                            ctx.body = data;
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlTeacherData(ctx) {
        startProcess({
            path: "../crawler/teacher.js",
            async message(data) {
                try {
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        const tearchRes = await qiniuUpload({
                            url: item.teacherImg,
                            bucket: buckets.tx_class_imgs.bucket,
                            ext: ".jpg",
                        });

                        tearchRes.key && (item.imgKey = tearchRes.key);
                        const res = await createTeacher(item);
                        if (res) {
                            console.log("create succ");
                        } else {
                            console.log("create failed");
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlStudentData(ctx) {
        startProcess({
            path: "../crawler/student.js",
            async message(data) {
                try {
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        const studentRes = await qiniuUpload({
                            url: item.studentImg,
                            bucket: buckets.tx_class_imgs.bucket,
                            ext: ".jpg",
                        });
                        studentRes.key && (item.imgKey = studentRes.key);
                        const res = await createStudent(item);
                        if (res) {
                            console.log("create succ");
                        } else {
                            console.log("create failed");
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlCourseTabData() {
        startProcess({
            path: "../crawler/courseTab.js",
            async message(data) {
                try {
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        console.log(item);
                        const res = await createCourseTab(item);
                        if (res) {
                            console.log("create succ");
                        } else {
                            console.log("create error");
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlCourseData() {
        startProcess({
            path: "../crawler/course.js",
            async message(data) {
                try {
                    for (let i = 0; i < data.length; i++) {
                        const item = data[i];
                        const uploadRes = await qiniuUpload({
                            url: item.posterImg,
                            bucket: buckets.tx_class_imgs.bucket,
                            ext: ".jpg",
                        });
                        uploadRes.key && (item.posterKey = uploadRes.key);
                        const res = await createCourse(item);
                        if (res) {
                            console.log("create succ");
                        } else {
                            console.log("create error");
                        }
                    }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }

    crawlAboutData() {
        startProcess({
            path: "../crawler/about.js",
            async message(data) {
                try {
                    const uploadRes = await qiniuUpload({
                        url: data.posterUrl,
                        bucket: buckets.tx_class_imgs.bucket,
                        ext: ".jpg",
                    });
                    uploadRes.key && (data.posterKey = uploadRes.key);
                    const res = await createAbout(data);
                    if (res) {
                        console.log("create succ");
                    } else {
                        console.log("create error");
                    }

                    // for (let i = 0; i < data.length; i++) {
                    //     const item = data[i];
                    //     const uploadRes = await qiniuUpload({
                    //         url: item.posterImg,
                    //         bucket: buckets.tx_class_imgs.bucket,
                    //         ext: ".jpg",
                    //     });
                    //     uploadRes.key && (item.posterKey = uploadRes.key);
                    //     const res = await createCourse(item);
                    //     if (res) {
                    //         console.log("create succ");
                    //     } else {
                    //         console.log("create error");
                    //     }
                    // }
                } catch (err) {
                    console.log(err);
                }
            },
            exit(code) {
                console.log(code);
            },
            error(err) {
                console.log(err);
            },
        });
    }
}

module.exports = new Crawler();