import { connect, disconnect } from "../database/database"
import { zombieModel } from "../models/Zombie";
import { locationModel } from "../models/Location";
import { LocationDocument } from "../types/types";

(async () => {
  connect();
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
    let locationsDocuments: LocationDocument[] = [];
    for (const location of locations){
      await locationModel.create(location).then(document =>{
        console.log(`Created location ${location.title}`);
        locationsDocuments.push(document);
      });
    }
    console.log(locationsDocuments)
    for (let i = 0; i < 90; i++) {
      const zombie = {name: `Zombie ${i}`, locationId: locationsDocuments[i%3]._id};
      await zombieModel.create(zombie);
      console.log(`Created zombie ${zombie.name} ${zombie.locationId}`);
    }
    disconnect();
  } catch (e) {
    console.error(e);
  }
})();