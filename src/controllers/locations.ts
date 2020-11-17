import {locationModel} from "../models/Location";

export const getLocations = (req, res) => {
    locationModel.find().then(locations =>{
        res.send(locations);
    });
}

var multiparty = require('multiparty');

export const addLocation = (req, res) => {
    let form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
        if (err){
            res.status(500).send(err);
        }
        const pictures: File[] = files;
        const location = {title: fields.title[0], description: fields.description[0], pictures: pictures}
        locationModel.create(location).then((createdLocation) =>{
            res.send(createdLocation);
        }).catch(err =>{
            res.status(500).send(err);
        });
      });
}

export const deleteLocation = (req, res) => {
    const location = req.body;
    locationModel.deleteOne(location).then((deleteLocation) =>{
        res.send(deleteLocation);
    }).catch(err =>{
        res.status(500).send();
    });
}