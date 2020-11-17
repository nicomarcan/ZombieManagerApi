"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnect = exports.connect = void 0;
const Mongoose = require("mongoose");
let database;
exports.connect = () => {
    // add your own uri below
    const uri = "mongodb://zombie:manager@localhost:27017/database";
    if (database) {
        return;
    }
    return Mongoose.connect(uri, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
};
exports.disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};
//# sourceMappingURL=database.js.map