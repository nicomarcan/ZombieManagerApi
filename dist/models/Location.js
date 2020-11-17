"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locationModel = void 0;
const mongoose_1 = require("mongoose");
const locationSchema_1 = __importDefault(require("../schemas/locationSchema"));
exports.locationModel = mongoose_1.model("Location", locationSchema_1.default);
//# sourceMappingURL=Location.js.map