'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/mongoose'), Schema = mongoose.Schema;
const LocationSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    description: { type: String },
    pictures: { type: Array },
});
exports.default = LocationSchema;
//# sourceMappingURL=locationSchema.js.map