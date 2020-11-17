"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLocation = exports.addLocation = exports.getLocations = void 0;
const Location_1 = require("../models/Location");
exports.getLocations = (req, res) => {
    Location_1.locationModel.find().then(locations => {
        res.send(locations);
    });
};
var multiparty = require('multiparty');
exports.addLocation = (req, res) => {
    let form = new multiparty.Form();
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.status(500).send(err);
        }
        const pictures = files;
        const location = { title: fields.title[0], description: fields.description[0], pictures: pictures };
        Location_1.locationModel.create(location).then((createdLocation) => {
            res.send(createdLocation);
        }).catch(err => {
            res.status(500).send(err);
        });
    });
};
exports.deleteLocation = (req, res) => {
    const location = req.body;
    Location_1.locationModel.deleteOne(location).then((deleteLocation) => {
        res.send(deleteLocation);
    }).catch(err => {
        res.status(500).send();
    });
};
//# sourceMappingURL=locations.js.map