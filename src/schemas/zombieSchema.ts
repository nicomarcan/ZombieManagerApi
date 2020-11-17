'use strict';
const mongoose = require('../config/mongoose'),
      Schema = mongoose.Schema;

const ZombieSchema =   new Schema({
    id: {type: Number},
    name: {type: String},
    locationId: {type: String}
});

export default ZombieSchema; 
