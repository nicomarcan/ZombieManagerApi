'use strict';
const mongoose = require('mongoose');
const uri = "mongodb://zombie:manager@localhost:27017/database";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
module.exports = mongoose;
//# sourceMappingURL=index.js.map