"use strict";
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
exports.User = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var users;
var User = /** @class */ (function () {
    function User() {
    }
    User.injectDB = function (db) {
        if (users) {
            return;
        }
        try {
            users = db.collection("users");
        }
        catch (e) {
            console.error("Unable to establish collection handles in Users model: " + e);
        }
    };
    Object.defineProperty(User, "collection", {
        get: function () {
            return users;
        },
        enumerable: false,
        configurable: true
    });
    User.required = function () {
        return ["email", "password"];
    };
    User.generateAuthToken = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var token, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!process.env.JWT_SECRET) {
                            throw new Error("JWT_SECRET not provided in config file");
                        }
                        token = jsonwebtoken_1.default.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);
                        tokens = user.tokens.push(token);
                        return [4 /*yield*/, users.findOneAndUpdate({ _id: user._id }, { $set: { tokens: tokens } })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, { user: user, token: token }];
                }
            });
        });
    };
    User.findByCredentials = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users.findOne({ email: email, password: password })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error("Unable to login");
                        }
                        isMatch = bcryptjs_1.default.compare(password, user.password);
                        if (!isMatch) {
                            throw new Error("Unable to login");
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var i, _a, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, users.insertOne(data)];
                    case 1:
                        i = _b.sent();
                        _a = data;
                        return [4 /*yield*/, bcryptjs_1.default.hash(data.password, 8)];
                    case 2:
                        _a.password = _b.sent();
                        user = Object.assign({ _id: i.insertedId, tokens: [] }, data);
                        return [2 /*return*/, user];
                }
            });
        });
    };
    User.update = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users.findOneAndUpdate({ _id: user._id }, user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    User.remove = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, users.findOneAndDelete({ _id: user._id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return User;
}());
exports.User = User;
