"use strict"
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc)
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
    return c > 3 && r && Object.defineProperty(target, key, r), r
  }
Object.defineProperty(exports, "__esModule", { value: true })
var decorators_1 = require("./../decorators")
require("../utils/middlewares")
var AuthController = /** @class */ (function () {
  function AuthController() {}
  AuthController.prototype.getRoot = function (req, res) {
    res.send(
      '\n        <div>\n          <div>You are logged in</div>\n          <a href="/auth/logout">Logout</a>\n        </div>\n      ',
    )
  }
  __decorate(
    [(0, decorators_1.get)("/")],
    AuthController.prototype,
    "getRoot",
    null,
  )
  AuthController = __decorate(
    [(0, decorators_1.controller)("")],
    AuthController,
  )
  return AuthController
})()
