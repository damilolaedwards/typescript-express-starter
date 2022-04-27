"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var messages_1 = __importDefault(require("./messages"));
var validate = /** @class */ (function () {
    function validate(data, rules, customMessages, customNames) {
        if (customMessages === void 0) { customMessages = {}; }
        if (customNames === void 0) { customNames = {}; }
        this.setData(data);
        this.rules = this.parseRules(rules);
        this.failedRules = [];
        this.errors = null;
        this.customRules = {};
        this.customMessages = customMessages;
        this.customNames = customNames;
        this.customValues = {};
    }
    Object.defineProperty(validate.prototype, "dateRules", {
        get: function () {
            return ["Before", "After", "DateBetween"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(validate.prototype, "sizeRules", {
        get: function () {
            return ["Size", "Between", "Min", "Max"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(validate.prototype, "numericRules", {
        get: function () {
            return ["Numeric", "Integer"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(validate.prototype, "implicitRules", {
        get: function () {
            return [
                "Required",
                "Filled",
                "RequiredWith",
                "RequiredWithAll",
                "RequiredWithout",
                "RequiredWithoutAll",
                "RequiredIf",
                "RequiredUnless",
                "Accepted",
                "Present",
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(validate.prototype, "dependentRules", {
        get: function () {
            return [
                "RequiredWith",
                "RequiredWithAll",
                "RequiredWithout",
                "RequiredWithoutAll",
                "RequiredIf",
                "RequiredUnless",
                "Confirmed",
                "Same",
                "Different",
                "Unique",
                "Before",
                "After",
            ];
        },
        enumerable: false,
        configurable: true
    });
    validate.make = function (data, rules, customMessages, customNames) {
        if (customMessages === void 0) { customMessages = []; }
        return new validate(data, rules, customMessages, customNames);
    };
    validate.prototype.extend = function (ruleName, callback, customMessage) {
        this.customRules[this.titleCase(ruleName, "_")] = callback;
        if (customMessage) {
            this.customMessages[this.snakeCase(ruleName)] = customMessage;
        }
    };
    validate.prototype.setData = function (data) {
        this.data = data;
    };
    validate.prototype.parseRules = function (rules) {
        var self = this;
        var arr = [];
        for (var key in rules) {
            arr.push({
                name: key,
                rules: self.parseItemRules(rules[key]),
            });
        }
        return arr;
    };
    validate.prototype.parseItemRules = function (itemRules) {
        var self = this;
        var rules = [];
        if (typeof itemRules === "string") {
            itemRules = itemRules.split("|");
        }
        itemRules.forEach(function (ruleAndArgs) {
            if (ruleAndArgs.trim()) {
                var args = ruleAndArgs.split(":");
                rules.push({
                    name: self.titleCase(args[0], "_"),
                    params: args[1]
                        ? args[0] === "regex"
                            ? args[1]
                            : args[1].split(",")
                        : [],
                });
            }
        });
        return rules;
    };
    validate.prototype.titleCase = function (str, delimiter) {
        delimiter = delimiter || " ";
        return str
            .split(delimiter)
            .map(function (item) {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        })
            .join("");
    };
    validate.prototype.snakeCase = function (str, delimiter) {
        delimiter = delimiter || "_";
        return str.replace(/(.)(?=[A-Z])/gu, "$1" + delimiter).toLowerCase();
    };
    validate.prototype.getValue = function (name) {
        if (typeof this.data[name] === "undefined") {
            return "";
        }
        return this.data[name];
    };
    validate.prototype.isEmptyObject = function (obj) {
        return Object.getOwnPropertyNames(obj).length === 0;
    };
    validate.prototype.isImplicit = function (rule) {
        return this.implicitRules.indexOf(rule) > -1;
    };
    validate.prototype.hasData = function (name) {
        return typeof this.data[name] !== "undefined";
    };
    validate.prototype.hasRule = function (name, rules) {
        return this.getRule(name, rules) !== null;
    };
    validate.prototype.getRule = function (name, rulesToCheck) {
        var a = this.rules.filter(function (item) {
            return item.name === name;
        });
        if (a.length === 0) {
            return null;
        }
        else {
            a = a[0];
        }
        if (!Array.isArray(rulesToCheck)) {
            rulesToCheck = [rulesToCheck];
        }
        var b = a.rules.filter(function (rule) {
            return rulesToCheck.indexOf(rule.name) >= 0;
        });
        return b.length === 0 ? null : [b[0].name, b[0].params];
    };
    validate.prototype.requireParameterCount = function (count, params, rule) {
        if (params.length < count) {
            throw new Error("Validation rule " +
                rule +
                " requires at least " +
                count +
                " parameters");
        }
    };
    validate.prototype.isEmptyValueAndContainsNullableRule = function (item) {
        return (!this.getValue(item.name) &&
            item.rules.filter(function (rule) { return rule.name === "Nullable"; }).length > 0);
    };
    validate.prototype.passes = function () {
        var self = this;
        this.errors = {};
        this.failedRules = {};
        var hasRequiredFields = this.rules.some(function (item) {
            return item.rules.some(function (rule) { return rule.name === "Required"; });
        });
        if (this.isEmptyObject(this.data) && !hasRequiredFields) {
            return true;
        }
        this.rules.forEach(function (item) {
            var name = item.name;
            if (self.isEmptyValueAndContainsNullableRule(item)) {
                return false;
            }
            item.rules
                .filter(function (rule) { return rule.name !== "Nullable"; })
                .forEach(function (rule) {
                self.validate(name, rule);
            });
        });
        return this.isEmptyObject(this.errors);
    };
    validate.prototype.fails = function () {
        return !this.passes();
    };
    validate.prototype.valid = function () {
        if (this.errors === null) {
            this.passes();
        }
        var arr = [];
        for (var key in this.data) {
            if (!this.hasError(key)) {
                arr.push(key);
            }
        }
        return arr;
    };
    validate.prototype.invalid = function () {
        if (this.errors === null) {
            this.passes();
        }
        var arr = [];
        for (var key in this.errors) {
            arr.push(key);
        }
        return arr;
    };
    validate.prototype.getErrorMsg = function (name, rule) {
        var msg = this.getMessage(name, rule);
        return this.doReplacements(msg, name, rule);
    };
    validate.prototype.getMessage = function (name, rule) {
        // 1) return custom message if defined
        var msg = this.getCustomMessage(name, rule);
        if (typeof msg !== "object" && typeof msg !== "undefined") {
            return msg;
        }
        var key = this.snakeCase(rule.name);
        // 2) then, use the default message for that rule, and re-test
        msg = messages_1.default[key];
        // 3) check if the message has subtype
        if (typeof msg === "object") {
            var subtype = this.getDataType(name);
            msg = messages_1.default[key][subtype];
        }
        return typeof msg === "undefined" ? "" : msg;
    };
    /**
     * return user-defined custom message for a given rule, or undefined
     */
    validate.prototype.getCustomMessage = function (name, rule) {
        var ruleName = this.snakeCase(rule.name);
        var msg = this.customMessages[name + "." + ruleName];
        // first, check for custom message for specific attribute rule
        // then, check for custom message for rule
        return typeof msg === "undefined" ? this.customMessages[ruleName] : msg;
    };
    validate.prototype.getDataType = function (name) {
        if (this.hasRule(name, this.numericRules)) {
            return "numeric";
        }
        else if (this.hasRule(name, ["Array"])) {
            return "array";
        }
        /* SKIP file type */
        return "string";
    };
    validate.prototype.doReplacements = function (msg, name, rule) {
        if (msg.trim() === "") {
            return "";
        }
        name = this.getDataName(name);
        msg = msg
            .replace(":ATTR", name.toUpperCase())
            .replace(":Attr", this.titleCase(name))
            .replace(":attr", name);
        // call replacer
        var replacer = this["replace" + rule.name];
        if (typeof replacer === "function") {
            msg = replacer.apply(this, [msg, name, rule.name, rule.params]);
        }
        return msg;
    };
    validate.prototype.validate = function (name, rule) {
        var value = this.getValue(name);
        var method = this.findRuleMethod(rule);
        // return method.apply(this, [name, value, rule.params])
        if (!method.apply(this, [name, value, rule.params])) {
            this.addFailure(name, rule);
        }
    };
    validate.prototype.findRuleMethod = function (rule) {
        var method = this["validate" + rule.name];
        if (!method) {
            method = this.customRules[rule.name];
        }
        if (typeof method !== "function") {
            console.error('"' + rule.name + '" validation rule does not exist!');
        }
        return method;
    };
    /*
          isValidatable(rule, name, value) {
              return this.presentOrRuleIsImplicit(rule, name, value) &&
              this.passesOptionalCheck(name) &&
              this.hasNotFailedPreviousRuleIfPresenceRule(rule, name)
          }
  
          presentOrRuleIsImplicit(rule, name, value) {
          return this.validateRequired(name, value) || this.isImplicit(rule)
      }
  
      passesOptionalCheck(name) {
          return true
      }
  
      hasNotFailedPreviousRuleIfPresenceRule(rule, name) {
          return true
      }
      */
    validate.prototype.addFailure = function (name, rule) {
        this.addError(name, rule);
        if (typeof this.failedRules[name] === "undefined") {
            this.failedRules[name] = {};
        }
        this.failedRules[name][rule.name] = rule.params;
    };
    validate.prototype.addError = function (name, rule) {
        // if (!Object.keys(this.data).find((data) => data === name)) {
        //     return;
        // }
        var msg = this.getMessage(name, rule);
        if (typeof msg === "object") {
            console.log("***** ", JSON.stringify(rule), JSON.stringify(msg));
        }
        msg = this.doReplacements(msg, name, rule);
        if (!this.hasError(name)) {
            this.errors[name] = [];
        }
        this.errors[name].push(msg);
    };
    validate.prototype.hasError = function (name) {
        if (name === void 0) { name = null; }
        if (name === null) {
            return !this.isEmptyObject(this.errors);
        }
        return this.getError(name) === null ? false : true;
    };
    validate.prototype.getError = function (name) {
        return typeof this.errors[name] === "undefined" ? null : this.errors[name];
    };
    validate.prototype.getErrors = function () {
        return this.errors;
    };
    /** Validation Rules **/
    validate.prototype.validateSometimes = function () {
        return true;
    };
    validate.prototype.validateBail = function () {
        return true;
    };
    validate.prototype.shouldStopValidating = function (name) {
        if (!this.hasRule(name, ["Bail"])) {
            return false;
        }
        return this.hasError(name);
    };
    validate.prototype.validateRequired = function (name, value, params) {
        if (value === null) {
            return false;
        }
        else if (typeof value === "string" && value.trim() === "") {
            return false;
        }
        else if (Array.isArray(value) && value.length < 1) {
            return false;
        }
        return true;
    };
    validate.prototype.validatePresent = function (name, value, params) {
        return typeof this.data[name] !== "undefined";
    };
    validate.prototype.validateFilled = function (name, value) {
        if (this.hasData(name)) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.anyFailingRequired = function (names) {
        var self = this;
        var result = false;
        names.forEach(function (name) {
            if (!self.validateRequired(name, self.getValue(name))) {
                result = true;
                return;
            }
        });
        return result;
    };
    validate.prototype.allFailingRequired = function (names) {
        var self = this;
        var result = true;
        names.forEach(function (name) {
            if (self.validateRequired(name, self.getValue(name))) {
                result = false;
                return;
            }
        });
        return result;
    };
    validate.prototype.validateRequiredWith = function (name, value, params) {
        if (!this.allFailingRequired(params)) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.validateRequiredWithAll = function (name, value, params) {
        if (!this.anyFailingRequired(params)) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.validateRequiredWithout = function (name, value, params) {
        if (this.anyFailingRequired(params)) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.validateRequiredWithoutAll = function (name, value, params) {
        if (this.allFailingRequired(params)) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.validateRequiredIf = function (name, value, params) {
        this.requireParameterCount(2, params, "required_if");
        var data = this.getValue(params[0]);
        if (typeof data === "boolean") {
            data = data.toString();
        }
        var values = params.slice(1);
        if (values.indexOf(data) >= 0) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.validateRequiredUnless = function (name, value, params) {
        this.requireParameterCount(2, params, "required_unless");
        var data = this.getValue(params[0]);
        var values = params.slice(1);
        if (values.indexOf(data) < 0) {
            return this.validateRequired(name, value);
        }
        return true;
    };
    validate.prototype.getPresentCount = function (names) {
        var self = this;
        var count = 0;
        names.forEach(function (name) {
            if (typeof self.data[name] !== "undefined") {
                count++;
            }
        });
        return count;
    };
    validate.prototype.validateMatch = function (name, value, params) {
        if (!(params instanceof Array)) {
            params = [params];
        }
        if (!(value instanceof Array)) {
            value = [value];
        }
        var re = params[0];
        if (!(re instanceof RegExp)) {
            re = re.split("/");
            re = new RegExp(re[1], re[2]);
        }
        return re.test(value);
    };
    validate.prototype.validateRegex = function (name, value, params) {
        return this.validateMatch(name, value, params);
    };
    validate.prototype.validateAccepted = function (name, value) {
        var acceptable = ["yes", "on", "1", 1, true, "true"];
        return this.validateRequired(name, value) && acceptable.indexOf(value) >= 0;
    };
    validate.prototype.validateArray = function (name, value) {
        if (typeof this.data[name] === "undefined") {
            return true;
        }
        return value === null || Array.isArray(value);
    };
    validate.prototype.validateConfirmed = function (name, value) {
        return this.validateSame(name, value, [name + "_confirmation"]);
    };
    validate.prototype.validateSame = function (name, value, params) {
        this.requireParameterCount(1, params, "same");
        var other = this.data[params[0]];
        return typeof other !== "undefined" && value === other;
    };
    validate.prototype.validateDifferent = function (name, value, params) {
        this.requireParameterCount(1, params, "different");
        var other = this.data[params[0]];
        return typeof other !== "undefined" && value !== other;
    };
    validate.prototype.validateDigits = function (name, value, params) {
        this.requireParameterCount(1, params, "digits");
        return (this.validateNumeric(name, value) && value.toString().length == params[0]);
    };
    validate.prototype.validateDigitsBetween = function (name, value, params) {
        this.requireParameterCount(2, params, "digits_between");
        var len = value.toString().length;
        return (this.validateNumeric(name, value) && len >= params[0] && len <= params[1]);
    };
    validate.prototype.validateSize = function (name, value, params) {
        this.requireParameterCount(1, params, "size");
        return this.getSize(name, value) == params[0];
    };
    validate.prototype.validateBetween = function (name, value, params) {
        this.requireParameterCount(2, params, "between");
        var size = this.getSize(name, value);
        return size >= params[0] && size <= params[1];
    };
    validate.prototype.validateMin = function (name, value, params) {
        this.requireParameterCount(1, params, "min");
        return this.getSize(name, value) >= params[0];
    };
    validate.prototype.validateMax = function (name, value, params) {
        this.requireParameterCount(1, params, "max");
        return this.getSize(name, value) <= params[0];
    };
    validate.prototype.getSize = function (name, value) {
        var hasNumeric = this.hasRule(name, this.numericRules);
        if (!value) {
            return 0;
        }
        if (hasNumeric && !isNaN(parseFloat(value))) {
            return parseFloat(value);
        }
        // for array and string
        return value.length;
    };
    validate.prototype.validateIn = function (name, value, params) {
        if (Array.isArray(value) && this.hasRule(name, "Array")) {
            var arr = this.arrayDiff(value, params);
            return arr.length === 0;
        }
        return params.indexOf(value) >= 0;
    };
    validate.prototype.arrayDiff = function (arr1, arr2) {
        var diff = [];
        arr1.forEach(function (item) {
            if (arr2.indexOf(item) < 0) {
                diff.push(item);
            }
        });
        return diff;
    };
    validate.prototype.validateNotIn = function (name, value, params) {
        this.requireParameterCount(1, params, "not_in");
        return !this.validateIn(name, value, params);
    };
    validate.prototype.validateNumeric = function (name, value) {
        return this.validateMatch(name, value, /^-?\d+(\.\d*)?$/);
    };
    validate.prototype.validateInteger = function (name, value) {
        return this.validateMatch(name, value, /^-?\d+$/);
    };
    validate.prototype.validateString = function (name, value) {
        if (!this.hasData(name)) {
            return true;
        }
        return value === null || typeof value === "string";
    };
    validate.prototype.validateEmail = function (name, value) {
        return this.validateMatch(name, value, /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,8}$/i);
    };
    validate.prototype.validateIp = function (name, value) {
        var segments = value.split(".");
        if (segments.length === 4 &&
            this.validateBetween(name, segments[0], [1, 255]) &&
            this.validateBetween(name, segments[1], [0, 255]) &&
            this.validateBetween(name, segments[2], [0, 255]) &&
            this.validateBetween(name, segments[3], [1, 255])) {
            return true;
        }
        return false;
    };
    validate.prototype.validateUrl = function (name, value) {
        return this.validateMatch(name, value, /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/i);
    };
    validate.prototype.validateAlpha = function (name, value) {
        return this.validateMatch(name, value, /^([a-z])+$/i);
    };
    validate.prototype.validateAlphaNum = function (name, value) {
        return this.validateMatch(name, value, /^([a-z0-9])+$/i);
    };
    validate.prototype.validateAlphaDash = function (name, value) {
        return this.validateMatch(name, value, /^([a-z0-9_\-])+$/i);
    };
    validate.prototype.validateBefore = function (name, value, params) {
        this.requireParameterCount(1, params, "before");
        if (typeof value !== "string" &&
            typeof value !== "number" &&
            !(value instanceof Date)) {
            return false;
        }
        var date = this.hasData(params[0]) ? this.getValue(params[0]) : params[0];
        if (!this.validateDate(name, date)) {
            return false;
        }
        return Date.parse(value) < Date.parse(date);
    };
    validate.prototype.validateBeforeOrEqual = function (name, value, params) {
        this.requireParameterCount(1, params, "before_or_equal");
        if (typeof value !== "string" &&
            typeof value !== "number" &&
            !(value instanceof Date)) {
            return false;
        }
        var date = this.hasData(params[0]) ? this.getValue(params[0]) : params[0];
        if (!this.validateDate(name, date)) {
            return false;
        }
        return Date.parse(value) <= Date.parse(date);
    };
    validate.prototype.validateAfter = function (name, value, params) {
        this.requireParameterCount(1, params, "after");
        if (typeof value !== "string" &&
            typeof value !== "number" &&
            !(value instanceof Date)) {
            return false;
        }
        var date = this.hasData(params[0]) ? this.getValue(params[0]) : params[0];
        if (!this.validateDate(name, date)) {
            return false;
        }
        return Date.parse(value) > Date.parse(date);
    };
    validate.prototype.validateAfterOrEqual = function (name, value, params) {
        this.requireParameterCount(1, params, "afterOrEqual");
        if (typeof value !== "string" &&
            typeof value !== "number" &&
            !(value instanceof Date)) {
            return false;
        }
        var date = this.hasData(params[0]) ? this.getValue(params[0]) : params[0];
        if (!this.validateDate(name, date)) {
            return false;
        }
        return Date.parse(value) >= Date.parse(date);
    };
    validate.prototype.validateDate = function (name, value) {
        if (value instanceof Date) {
            return true;
        }
        if (typeof value !== "string" && typeof value !== "number") {
            return false;
        }
        return !isNaN(Date.parse(value));
    };
    validate.prototype.validateBoolean = function (name, value) {
        if (!this.hasData(name)) {
            return true;
        }
        var acceptable = [true, false, 0, 1, "0", "1"];
        return value === null || acceptable.indexOf(value) >= 0;
    };
    validate.prototype.validateJson = function (name, value) {
        try {
            JSON.parse(value);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    /*---- Replacers ----*/
    validate.prototype.strReplace = function (find, replace, string) {
        if (!Array.isArray(find)) {
            find = [find];
        }
        if (!Array.isArray(replace)) {
            replace = [replace];
        }
        if (!Array.isArray(string)) {
            for (var i = 0; i < string.length; i++) {
                string = string.replace(find, replace);
            }
        }
        for (var i = 0; i < find.length; i++) {
            string = string.replace(find[i], replace[i]);
        }
        return string;
    };
    validate.prototype.getDisplayableValue = function (name, value) {
        if (typeof this.customValues[name] !== "undefined" &&
            typeof this.customValues[name][value] !== "undefined") {
            return this.customValues[name][value];
        }
        return value;
    };
    // getAttributeList
    validate.prototype.getDataNameList = function (values) {
        var names = [];
        for (var key in values) {
            names.push({
                key: this.getDataName(values[key]),
            });
        }
        return names;
    };
    // getAttribute
    validate.prototype.getDataName = function (name) {
        if (typeof this.customNames[name] !== "undefined") {
            return this.customNames[name];
        }
        return this.strReplace("_", " ", this.snakeCase(name));
    };
    // setAttributeNames
    validate.prototype.setCustomNames = function (names) {
        this.customNames = names;
        return this;
    };
    validate.prototype.addCustomNames = function (customNames) {
        for (var key in customNames) {
            this.customNames[key] = customNames[key];
        }
        return this;
    };
    validate.prototype.getCustomValues = function () {
        return this.customValues;
    };
    validate.prototype.addCustomValues = function (customValues) {
        for (var key in customValues) {
            this.customValues[key] = customValues[key];
        }
        return this;
    };
    validate.prototype.setValueNames = function (values) {
        this.customValues = values;
        return this;
    };
    validate.prototype.failed = function () {
        return this.failedRules;
    };
    validate.prototype.replaceBetween = function (msg, name, rule, params) {
        return this.strReplace([":min", ":max"], params, msg);
    };
    validate.prototype.replaceDifferent = function (msg, name, rule, params) {
        return this.replaceSame(msg, name, rule, params);
    };
    validate.prototype.replaceDigits = function (msg, name, rule, params) {
        return this.strReplace(":digits", params[0], msg);
    };
    validate.prototype.replaceDigitsBetween = function (msg, name, rule, params) {
        return this.replaceBetween(msg, name, rule, params);
    };
    validate.prototype.replaceMin = function (msg, name, rule, params) {
        return this.strReplace(":min", params[0], msg);
    };
    validate.prototype.replaceMax = function (msg, name, rule, params) {
        return this.strReplace(":max", params[0], msg);
    };
    validate.prototype.replaceIn = function (msg, name, rule, params) {
        var self = this;
        params = params.map(function (value) {
            return self.getDisplayableValue(name, value);
        });
        return this.strReplace(":values", params.join(", "), msg);
    };
    validate.prototype.replaceNotIn = function (msg, name, rule, params) {
        return this.replaceIn(msg, name, rule, params);
    };
    // replaceInArray()
    // replaceMimes()
    validate.prototype.replaceRequiredWith = function (msg, name, rule, params) {
        params = this.getDataNameList(params);
        return this.strReplace(":values", params.join(" / "), msg);
    };
    validate.prototype.replaceRequiredWithAll = function (msg, name, rule, params) {
        return this.replaceRequiredWith(msg, name, rule, params);
    };
    validate.prototype.replaceRequiredWithout = function (msg, name, rule, params) {
        return this.replaceRequiredWith(msg, name, rule, params);
    };
    validate.prototype.replaceRequiredWithoutAll = function (msg, name, rule, params) {
        return this.replaceRequiredWith(msg, name, rule, params);
    };
    validate.prototype.replaceRequiredIf = function (msg, name, rule, params) {
        params[1] = this.getDisplayableValue(params[0], this.data[params[0]]);
        params[0] = this.getDataName(params[0]);
        return this.strReplace([":other", ":value"], params, msg);
    };
    validate.prototype.replaceRequiredUnless = function (msg, name, rule, params) {
        var other = this.getDataName(params.shift());
        return this.strReplace([":other", ":values"], [other, params.join(", ")], msg);
    };
    validate.prototype.replaceSame = function (msg, name, rule, params) {
        return this.strReplace(":other", name, msg);
    };
    validate.prototype.replaceSize = function (msg, name, rule, params) {
        return this.strReplace(":size", params[0], msg);
    };
    validate.prototype.replaceBefore = function (msg, name, rule, params) {
        if (isNaN(Date.parse(params[0]))) {
            return this.strReplace(":date", this.getDataName(params[0]), msg);
        }
        return this.strReplace(":date", params[0], msg);
    };
    validate.prototype.replaceAfter = function (msg, name, rule, params) {
        return this.replaceBefore(msg, name, rule, params);
    };
    validate.prototype.dependsOnOtherFields = function (rule) {
        return this.dependentRules.indexOf(rule);
    };
    return validate;
}());
exports.default = validate;
