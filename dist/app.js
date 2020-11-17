"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database/database");
const router_1 = require("./routes/router");
//get router
var router = router_1.setupRouter();
const bodyParser = require('body-parser');
const port = 3001;
const app = express_1.default();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
database_1.connect().then((mongoose) => {
    console.log("Connected to database");
    router_1.addRoutes(router);
    app.use(router);
    app.listen(port, err => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${port}`);
    });
});
//# sourceMappingURL=app.js.map