"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zombieModel = void 0;
const mongoose_1 = require("mongoose");
const zombieSchema_1 = __importDefault(require("../schemas/zombieSchema"));
exports.zombieModel = mongoose_1.model("zombie", zombieSchema_1.default);
//# sourceMappingURL=model.js.map