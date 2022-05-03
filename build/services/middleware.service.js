"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requiredProps = void 0;
var utils_services_1 = require("./utils.services");
function requiredProps(req, res, next) {
    try {
        req.body.json_data = JSON.parse(req.body.json_data);
    }
    catch (error) {
        res.status(400);
        res.send({
            error: "Invalid json data",
        });
        return;
    }
    if (req.body.json_data.key &&
        req.body.json_data.start_time &&
        req.body.json_data.end_time &&
        req.body.json_data.odd &&
        req.body.json_data.tips &&
        req.body.address &&
        utils_services_1.utils.isJsonString(JSON.stringify(req.body.json_data))) {
        next();
        return;
    }
    res.status(400);
    res.send({
        error: "Invalid json data",
    });
}
exports.requiredProps = requiredProps;
