const util = require("util");
const multer = require("multer");

let storage = multer.memoryStorage({
  destination: function(req, file, callback) {
   callback(null, "");
  },
 })

let uploadFile = multer({
  storage: storage
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
