'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/mongoose'), Schema = mongoose.Schema;
const ZombieSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    locationId: { type: String }
});
exports.default = ZombieSchema;
//# sourceMappingURL=zombieSchema.js.map