var fs = require("fs");

module.exports = {
    cert: fs.readFileSync("./server.crt"),
    key: fs.readFileSync("./server.key")
}
