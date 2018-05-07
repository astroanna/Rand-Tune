"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var port = 8080;
var server = new App_1.App().expressApp;
console.log("Express server started on port: " + port);
server.listen(port);
