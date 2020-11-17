import express from 'express';

import { connect } from "./database/database";
import {addRoutes, setupRouter} from './routes/router'

//get router
var router = setupRouter()
const bodyParser = require('body-parser');

const port = 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


connect().then( (mongoose) => {
  console.log("Connected to database");
  addRoutes(router);
  app.use(router);
  app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });
});



