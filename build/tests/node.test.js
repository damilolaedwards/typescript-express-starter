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
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../app"));
var utils_services_1 = require("../services/utils.services");
test("it should encrypt new tips data without image", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .expect(200)];
                case 1:
                    response = _a.sent();
                    expect(response.body.key).toBe(utils_services_1.utils.encrypt("my_lost_key"));
                    expect(response.body.start_time).toBe("12345678");
                    expect(response.body.end_time).toBe("87654321");
                    expect(response.body.odd).toBe("205");
                    return [2 /*return*/];
            }
        });
    });
});
test("it should encrypt new tips data with image", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(200)];
                case 1:
                    response = _a.sent();
                    expect(response.body.key).toBe(utils_services_1.utils.encrypt("my_lost_key"));
                    expect(response.body.start_time).toBe("12345678");
                    expect(response.body.end_time).toBe("87654321");
                    expect(response.body.odd).toBe("205");
                    return [2 /*return*/];
            }
        });
    });
});
test("it should revert if not tips data not valid json", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .send("just any data")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if key not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if start time not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if end time not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if odd not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if tips data not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: "",
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("it reverts if address not set during tip upload", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/upload-tip")
                        .set("Accept", "application/json")
                        .field("address", "")
                        .field("json_data", JSON.stringify({
                        start_time: "12345678",
                        end_time: "87654321",
                        odd: "2.05",
                        key: "my_lost_key",
                        tips: {},
                    }))
                        .attach("image", __dirname + "/fixtures/avatar.jpeg")
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid json data");
                    return [2 /*return*/];
            }
        });
    });
});
test("purchase key is encrypted", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/purchase")
                        .send({
                        id: "1",
                        key: "my_key_123",
                    })
                        .expect(200)];
                case 1:
                    response = _a.sent();
                    expect(response.body.id).toBe("1");
                    expect(response.body.key).toBe(utils_services_1.utils.encrypt("my_key_123"));
                    return [2 /*return*/];
            }
        });
    });
});
test("revert on purchase if id not set", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/purchase")
                        .send({
                        id: "",
                        key: "my_key_123",
                    })
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("invalid id");
                    return [2 /*return*/];
            }
        });
    });
});
test("revert on purchase if id not integer", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/purchase")
                        .send({
                        id: "one",
                        key: "my_key_123",
                    })
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("invalid id");
                    return [2 /*return*/];
            }
        });
    });
});
test("revert on purchase if key not set", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/purchase")
                        .send({
                        id: "1",
                        key: "",
                    })
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("key length too short, min: 6 chars");
                    return [2 /*return*/];
            }
        });
    });
});
test("revert on tip view if address not set", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/tip/view")
                        .send({
                        id: "1",
                        address: "",
                    })
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid input parameters");
                    return [2 /*return*/];
            }
        });
    });
});
test("revert on tip view if id not set", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/tip/view")
                        .send({
                        id: "",
                        address: "test_0x4919B45b005058Fabc63AC2da39f7859eDeD9271",
                    })
                        .expect(400)];
                case 1:
                    response = _a.sent();
                    expect(response.body.error).toBe("Invalid input parameters");
                    return [2 /*return*/];
            }
        });
    });
});
test("return null if tip isn't purchased", function () {
    return __awaiter(this, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1.default)(app_1.default)
                        .post("/api/v1/tip/view")
                        .send({
                        id: "1",
                        address: "0x4919B45b005058Fabc63AC2da39f7859eDeD9271",
                    })
                        .expect(404)];
                case 1:
                    response = _a.sent();
                    expect(response.body.data).toBe(null);
                    return [2 /*return*/];
            }
        });
    });
});
test("returns decrypted tips data if tips purchased", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
test("reverts if invalid json data on profile creation", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
test("encrypts profile data", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
test("returns null if empty profile on profile view", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
test("returns user's profile data", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
});
