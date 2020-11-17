import express from 'express';
import cors from "cors";
import {getLocations, addLocation, deleteLocation} from "../controllers/locations";
import {getZombies} from "../controllers/zombies";

export const setupRouter = (): express.Router =>{
    const router =  express.Router();
    //options for cors midddleware
    const options:cors.CorsOptions = {
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:3000",
    preflightContinue: false
    };

    //use cors middleware
    router.use(cors(options));
    return router;
}
export const addRoutes = (router: express.Router) =>{
    //add your routes
    router.get('/locations', getLocations);
    router.get('/zombies', getZombies);

    router.post('/locations', addLocation);

    router.delete('/locations', deleteLocation);

}
 