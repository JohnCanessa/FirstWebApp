// **** ****
const port = 3000;

// **** required modules ****
http = require("http");
httpStatus = require("http-status-codes");
router = require("./router");
contentTypes = require("./contentTypes");
utils = require("./utils");

// **** register individual routes with the router module ****
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.htm);
    utils.getFile("views/index.html", res);
});

router.get("/recipes.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/recipes.html", res);
});
  
router.get("/contact.html", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});
  
router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/graph.png", res);
});

router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.jpg);
    utils.getFile("public/images/product.jpg", res);
});

router.get("/nonas_kitchen.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/nonas_kitchen.css", res);
});

router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});

router.get("/nonas_kitchen.js", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.js);
    utils.getFile("public/js/nonas_kitchen.js", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});


// ???? ????
console.log(`<<< router.get: ${router.get}`);
console.log(`<<< router.post: ${router.post}`);


// **** create server and listen on the specified port ****
http.createServer(router.handle).listen(port);

// ???? ????
console.log(`<<< web server listening on port : ${port}`);
  
  
