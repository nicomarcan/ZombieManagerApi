'use strict';
const mongoose = require('../config/mongoose'),
      Schema = mongoose.Schema;

const LocationSchema =  new Schema({
    id: {type: Number},
    title: {type: String},
    description: {type: String},
    pictures: {type: Array},
});

export default LocationSchema; 