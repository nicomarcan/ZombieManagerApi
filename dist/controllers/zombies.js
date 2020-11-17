"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getZombies = void 0;
const Zombie_1 = require("../models/Zombie");
exports.getZombies = (req, res) => {
    Zombie_1.zombieModel.find().then(zombies => {
        res.send(zombies);
    });
};
//# sourceMappingURL=zombies.js.map