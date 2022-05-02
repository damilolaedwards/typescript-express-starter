"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_service_1 = require("./services/router.service");
require("./controllers/Node");
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(
  body_parser_1.default.urlencoded({
    extended: true,
  })
);
app.use(router_service_1.AppRouter.instance());
exports.default = app;
