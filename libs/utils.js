const cp = require("child_process");
const path = require("path");

const nanoId = require("nanoid");
const Qiniu = require("qiniu");
const {
    keys: { AK, SK },
} = require("../config/qiniu.config");

function startProcess(options) {
    const scriptUrl = path.resolve(__dirname, options.path);
    //开启子进程运行
    const child = cp.fork(scriptUrl, []);

    let invoked = false;

    child.on("message", (result) => {
        options.message(result);
    });

    child.on("exit", (code) => {
        if (invoked) return;
        invoked = true;
        options.exit(code);
    });

    child.on("error", (err) => {
        if (invoked) return;
        invoked = true;
        options.error(err);
    });
}

// 上传七牛云
function qiniuUpload(options) {
    const { url, bucket } = options;
    const mac = new Qiniu.auth.digest.Mac(AK, SK),
        conf = new Qiniu.conf.Config(),
        client = new Qiniu.rs.BucketManager(mac, conf),
        key = nanoId() + options.ext;

    return new Promise((resolve, reject) => {
        client.fetch(url, bucket, key, (error, result, info) => {
            if (error) {
                reject(error);
            }
            if (info.statusCode == 200) {
                resolve({ key });
            } else {
                reject(info);
            }
        });
    });
}

module.exports = {
    startProcess,
    qiniuUpload,
};