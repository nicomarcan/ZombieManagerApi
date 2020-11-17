import Mongoose = require("mongoose");

let database: Mongoose.Connection;
export const connect = () => {
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

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};