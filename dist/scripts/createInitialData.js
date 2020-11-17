"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database/database");
const Zombie_1 = require("../models/Zombie");
const Location_1 = require("../models/Location");
(() => __awaiter(void 0, void 0, void 0, function* () {
    database_1.connect();
    try {
        const locations = [
            {
                title: 'Hospital',
                description: '',
                pictures: [],
            },
            {
                title: 'School',
                description: '',
                pictures: [],
            },
            {
                title: 'Warehouse',
                description: '',
                pictures: [],
            },
        ];
        let locationsDocuments = [];
        for (const location of locations) {
            yield Location_1.locationModel.create(location).then(document => {
                console.log(`Created location ${location.title}`);
                locationsDocuments.push(document);
            });
        }
        console.log(locationsDocuments);
        for (let i = 0; i < 90; i++) {
            const zombie = { name: `Zombie ${i}`, locationId: locationsDocuments[i % 3]._id };
            yield Zombie_1.zombieModel.create(zombie);
            console.log(`Created zombie ${zombie.name} ${zombie.locationId}`);
        }
        database_1.disconnect();
    }
    catch (e) {
        console.error(e);
    }
}))();
//# sourceMappingURL=createInitialData.js.map