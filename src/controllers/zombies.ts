import {zombieModel} from "../models/Zombie";

export const getZombies = (req, res) => {
    zombieModel.find().then(zombies =>{
        res.send(zombies);
    });
}

