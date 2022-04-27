"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var decorators_1 = require("./../decorators");
var middlewares_1 = require("../utils/middlewares");
var User_1 = require("./../models/User");
var validate_1 = __importDefault(require("./../utils/validator/validate"));
var mail_service_1 = require("../services/mail.service");
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.me = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    res.status(200).send(User_1.User.getAuthUser(req.body));
                }
                catch (e) {
                    res.status(400).send({
                        error: e.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    UserController.prototype.patch = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rules, v, user, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rules = {
                            firstname: ["string"],
                            lastname: ["string"]
                        };
                        v = validate_1.default.make(req.body, rules);
                        if (!v.passes()) {
                            return [2 /*return*/, res.status(400).send({
                                    error: {
                                        messsage: "input validation error",
                                        body: v.getErrors(),
                                    },
                                })];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, User_1.User.update(req.body)];
                    case 2:
                        user = _a.sent();
                        res.status(200).send(user);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        res.status(500).send({
                            error: e_1.message
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var user, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User_1.User.remove(req.body.user)];
                    case 1:
                        user = _a.sent();
                        mail_service_1.Mail.deactivateAccount();
                        res.status(200).send({
                            success: "user account successfully deleted",
                            user: user,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        res.status(500).send({
                            error: e_2.message
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, decorators_1.get)("/me"),
        (0, decorators_1.use)(middlewares_1.auth)
    ], UserController.prototype, "me", null);
    __decorate([
        (0, decorators_1.post)('/me/update'),
        (0, decorators_1.use)(middlewares_1.auth),
        (0, decorators_1.use)(middlewares_1.Input.sanitize(['firstname', 'lastname']))
    ], UserController.prototype, "patch", null);
    __decorate([
        (0, decorators_1.post)('/delete'),
        (0, decorators_1.use)(middlewares_1.auth)
    ], UserController.prototype, "delete", null);
    UserController = __decorate([
        (0, decorators_1.controller)("/api/v1/user")
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
