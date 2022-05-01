"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var crypto_1 = __importDefault(require("crypto"));
var key = process.env.ENC_KEY || "";
var vector = process.env.INIT_VEC || "";
var utils = /** @class */ (function () {
  function utils() {}
  utils.isJsonString = function (data) {
    try {
      JSON.parse(data);
    } catch (e) {
      return false;
    }
    return true;
  };
  utils.encrypt = function (data) {
    var cipher = crypto_1.default.createCipheriv("aes256", key, vector);
    var encrypted = cipher.update(data, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  };
  utils.decrypt = function (data) {
    var decipher = crypto_1.default.createDecipheriv(
      "aes-256-cbc",
      key,
      vector
    );
    var decrypted = decipher.update(data, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  };
  return utils;
})();
exports.utils = utils;
