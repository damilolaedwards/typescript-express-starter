"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
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
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var sdk_1 = __importDefault(require("@pinata/sdk"));
var crypto_1 = __importDefault(require("crypto"));
var multer_1 = __importDefault(require("multer"));
var alchemy_web3_1 = require("@alch/alchemy-web3");
var decorators_1 = require("../decorators");
var ALCHEMY_API_URL = process.env.ALCHEMY_API_URL || "";
var web3 = (0, alchemy_web3_1.createAlchemyWeb3)(ALCHEMY_API_URL);
var abi = require("../../tipshot_abi.json");
var contractAddress = "0x390c9a7d14B1D7b45244131260584bEc1E405dFF";
var tipshotContract = new web3.eth.Contract(abi, contractAddress);
var gateway_url = process.env.GATEWAY_URL || "";
var api_key = process.env.PINATA_API_KEY || "";
var api_secret = process.env.PINATA_API_SECRET || "";
var pinata = (0, sdk_1.default)(api_key, api_secret);
var key = process.env.ENC_KEY || "";
var vector = process.env.INIT_VEC || "";
var upload = (0, multer_1.default)({
  limits: {
    fileSize: 1000000,
  },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"));
    }
    cb(null, true);
  },
});
var Node = /** @class */ (function () {
  function Node() {}
  Node.prototype.upload = function (req, res) {
    var _this = this;
    if (!this.isJsonString(req.body.json_data)) {
      res.status(400).send({
        error: "Invalid json data",
      });
    }
    var json_data = req.body.json_data;
    if (req.file) {
      json_data = __assign(__assign({}, req.body.json_data), {
        image: {
          mimetype: req.file.mimetype,
          buffer: req.file.buffer,
        },
      });
    }
    var encrypted = this.encrypt(JSON.stringify(json_data));
    var payload = {
      content: encrypted,
    };
    pinata
      .pinJSONToIPFS(payload, {})
      .then(function (result) {
        res.status(200).send({
          ipfsHash: result.IpfsHash,
          key: _this.encrypt(req.body.json_data.key),
          start_time: req.body.json_data.start_time,
          end_time: req.body.json_data.end_time,
          odd: req.body.json_data.odd * 100,
        });
      })
      .catch(function (err) {
        res.status(500).send({
          error: "Could not pin to IPFS",
        });
      });
  };
  Node.prototype.viewTip = function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
      var tx, tip, content, decrypted, _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            return [
              4 /*yield*/,
              tipshotContract.methods
                .Purchases(req.body.address, req.body.id)
                .call(),
            ];
          case 1:
            tx = _b.sent();
            if (!(tx.purchased && tx.key == this.encrypt(req.body.key)))
              return [3 /*break*/, 5];
            return [
              4 /*yield*/,
              tipshotContract.methods.Predictions(req.body.id).call(),
            ];
          case 2:
            tip = _b.sent();
            return [4 /*yield*/, fetch(gateway_url + tip.ipfsHash)];
          case 3:
            content = _b.sent();
            _a = this.decrypt;
            return [4 /*yield*/, content.text()];
          case 4:
            decrypted = _a.apply(this, [_b.sent()]);
            res.status(200).send({
              data: JSON.parse(decrypted),
            });
            return [3 /*break*/, 6];
          case 5:
            res.status(404).send({
              data: null,
            });
            _b.label = 6;
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };
  Node.prototype.encryptPurchaseKey = function (req, res) {
    if (req.body.key.length < 6) {
      res.status(400).send({
        error: "key length too short, min: 6 chars",
      });
    }
    res.status(200).send({
      id: req.body.id,
      key: this.encrypt(req.body.key),
    });
  };
  Node.prototype.isJsonString = function (str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };
  Node.prototype.encrypt = function (data) {
    var cipher = crypto_1.default.createCipheriv("aes256", key, vector);
    var encrypted = cipher.update(data, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  };
  Node.prototype.decrypt = function (data) {
    var decipher = crypto_1.default.createDecipheriv(
      "aes-256-cbc",
      key,
      vector
    );
    var decrypted = decipher.update(data, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  };
  __decorate(
    [
      (0, decorators_1.post)("/upload-tip"),
      (0, decorators_1.use)(upload.single("image")),
    ],
    Node.prototype,
    "upload",
    null
  );
  __decorate(
    [(0, decorators_1.post)("/tip/view")],
    Node.prototype,
    "viewTip",
    null
  );
  __decorate(
    [(0, decorators_1.post)("/purchase")],
    Node.prototype,
    "encryptPurchaseKey",
    null
  );
  Node = __decorate([(0, decorators_1.controller)("/api/v1")], Node);
  return Node;
})();
exports.Node = Node;
