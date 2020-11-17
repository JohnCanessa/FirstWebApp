// **** required modules ****
const fs = require("fs");
httpStatus = require("http-status-codes");
contentTypes = require("./contentTypes");

// **** exports ****
module.exports = {

    // **** ****
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
        if (error) {
            res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
            res.end("Error encountered while serving content!");
        }
        res.end(data);
        });
    }
};





