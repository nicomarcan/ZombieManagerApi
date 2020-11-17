"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRoutes = exports.setupRouter = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const locations_1 = require("../controllers/locations");
const zombies_1 = require("../controllers/zombies");
exports.setupRouter = () => {
    const router = express_1.default.Router();
    //options for cors midddleware
    const options = {
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        credentials: true,
        methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        origin: "http://localhost:3000",
        preflightContinue: false
    };
    //use cors middleware
    router.use(cors_1.default(options));
    return router;
};
exports.addRoutes = (router) => {
    //add your routes
    router.get('/locations', locations_1.getLocations);
    router.get('/zombies', zombies_1.getZombies);
    router.post('/locations', locations_1.addLocation);
    router.delete('/locations', locations_1.deleteLocation);
};
//# sourceMappingURL=router.js.map