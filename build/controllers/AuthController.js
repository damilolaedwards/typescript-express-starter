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
exports.AuthController = void 0;
var decorators_1 = require("./../decorators");
var middlewares_1 = require("../utils/middlewares");
var User_1 = require("./../models/User");
var validate_1 = __importDefault(require("./../utils/validator/validate"));
var mail_service_1 = require("../services/mail.service");
var passport_1 = __importDefault(require("passport"));
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rules, v, exists, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        rules = {
                            email: ["required", "email"],
                            password: ["required", "min:8"],
                            confirm_password: ["same:password"],
                        };
                        v = validate_1.default.make(req.body, rules);
                        return [4 /*yield*/, User_1.User.collection.findOne({ email: req.body.email })];
                    case 1:
                        exists = _c.sent();
                        if (exists) {
                            return [2 /*return*/, res.status(400).send({
                                    error: {
                                        message: "input validation error",
                                        body: "email already exists in database",
                                    },
                                })];
                        }
                        if (!v.passes()) {
                            return [2 /*return*/, res.status(400).send({
                                    error: {
                                        messsage: "input validation error",
                                        body: v.getErrors(),
                                    },
                                })];
                        }
                        delete req.body.confirm_password;
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, , 5]);
                        _b = (_a = res.status(201)).send;
                        return [4 /*yield*/, User_1.User.create(req.body)];
                    case 3:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _c.sent();
                        res.status(400).send({
                            error: e_1.message,
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rules, v, user, token, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rules = {
                            email: ["required", "email"],
                            password: ["required", "min:8"],
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
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, User_1.User.findByCredentials(req.body.email, req.body.password)];
                    case 2:
                        user = _a.sent();
                        token = User_1.User.generateAuthToken(user);
                        return [4 /*yield*/, User_1.User.addToken(user, token)];
                    case 3:
                        _a.sent();
                        res.send({ user: user, token: token });
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        res.status(400).send({
                            error: e_2.message,
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.logout = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!req.user) {
                            throw new Error("Could not logout!");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, User_1.User.removeToken(req.user, req.user.token)];
                    case 2:
                        _a.sent();
                        res.status(200).send({
                            success: "logout successfull!",
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        res.status(500).send({
                            error: e_3.message,
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.logoutAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!req.user) {
                    throw new Error("Could not logout!");
                }
                try {
                    User_1.User.removeAllTokens(req.user);
                    res.status(200).send({
                        message: "Logged out all accounts",
                    });
                }
                catch (e) {
                    res.status(500).send({
                        error: e.message,
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AuthController.prototype.resetPassword = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rules, v, user, link, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rules = {
                            email: ["required", "email"]
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
                        return [4 /*yield*/, User_1.User.getUser(req.body.email)];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, res.status(404).send({
                                    error: "email not found",
                                })];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, User_1.User.passwordReset(user)];
                    case 3:
                        link = _a.sent();
                        mail_service_1.Mail.resetPassword(user.email, "Password Reset Request", { name: user.name, link: link }, "./template/requestResetPassword.handlebars");
                        res.status(200).send({
                            success: "password reset email successfully sent",
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        res.status(500).send({
                            error: e_4.message,
                        });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.changePassword = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var recipient, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, User_1.User.changePassword(req.body.user_id, req.body.token, req.body.password)];
                    case 1:
                        recipient = _a.sent();
                        mail_service_1.Mail.passwordChanged(recipient.email, "Password Successfully Changed", { name: recipient.name }, "./template/requestChangePassword.handlebars");
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        res.status(500).send({
                            error: e_5.message
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.googleAuth = function () {
        passport_1.default.authenticate('google', { scope: ['email', 'profile'] });
    };
    AuthController.prototype.googleCallBack = function (req, res) {
        return res.send(req.user);
    };
    __decorate([
        (0, decorators_1.post)("/register"),
        (0, decorators_1.use)(middlewares_1.Input.sanitize(["email", "password", "confirm_password"]))
    ], AuthController.prototype, "register", null);
    __decorate([
        (0, decorators_1.post)("/login"),
        (0, decorators_1.use)(middlewares_1.Input.sanitize(["email", "password"]))
    ], AuthController.prototype, "login", null);
    __decorate([
        (0, decorators_1.post)("/logout"),
        (0, decorators_1.use)(middlewares_1.auth)
    ], AuthController.prototype, "logout", null);
    __decorate([
        (0, decorators_1.post)("logout/all"),
        (0, decorators_1.use)(middlewares_1.auth)
    ], AuthController.prototype, "logoutAll", null);
    __decorate([
        (0, decorators_1.post)("/password/reset"),
        (0, decorators_1.use)(middlewares_1.Input.sanitize(["email"]))
    ], AuthController.prototype, "resetPassword", null);
    __decorate([
        (0, decorators_1.use)(middlewares_1.Input.sanitize(["user_id", "token", "password", "confirm_password"])),
        (0, decorators_1.post)('/password/change')
    ], AuthController.prototype, "changePassword", null);
    __decorate([
        (0, decorators_1.get)('/auth/google')
    ], AuthController.prototype, "googleAuth", null);
    __decorate([
        (0, decorators_1.get)('/auth/google/callback'),
        (0, decorators_1.use)(passport_1.default.authenticate('google'))
    ], AuthController.prototype, "googleCallBack", null);
    AuthController = __decorate([
        (0, decorators_1.controller)("/api/v1/auth")
    ], AuthController);
    return AuthController;
}());
exports.AuthController = AuthController;
