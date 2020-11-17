// **** required modules ****
const httpStatus = require("http-status-codes");
contentTypes = require("./contentTypes");
utils = require("./utils");


// **** ****
const getJSONString = (obj) => {
    return JSON.stringify(obj, null, 2);
}


// **** routes ****
const routes = {
    "GET": {},
    "POST": {}
};

// **** functions to handle requests ****
exports.handle = (req, res) => {

    
    // ???? ????
    console.log(`<<<  req.method: ${getJSONString(req.method)}`);
    console.log(`<<<     req.url: ${getJSONString(req.url)}`);
    console.log(`<<< req.headers: ${getJSONString(req.headers)}`);


    // **** ****
    try {
        routes[req.method][req.url](req,res);
    } catch (e) {
         res.writeHead(httpStatus.OK, contentTypes.html);
         utils.getFile("views/error.html", res);
    }
};

// **** ****
exports.get = (url, action) => {
    routes["GET"][url] = action;
};

// **** ****
exports.post = (url, action) => {
    routes["POST"][url] = action;
}