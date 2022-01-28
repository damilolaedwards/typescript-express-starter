"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_services_1 = require("./services/router.services");
var database_service_1 = require("./services/database.service");
require("./controllers/AuthController");
var port = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(router_services_1.AppRouter.instance());
(0, database_service_1.connectToDatabase)()
    .then(function () {
    app.listen(port, function () {
        console.log("Server started at http://localhost:" + port);
    });
})
    .catch(function (error) {
    console.error("Database connection failed", error);
    process.exit();
});
