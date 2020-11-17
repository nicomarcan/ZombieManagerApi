import { Document, Model } from "mongoose";

export type Zombie = { 
    name: string;
    locationId: string;
}

export interface ZombieDocument extends Zombie, Document {}
export interface ZombieModel extends Model<ZombieDocument> {}

export type Location = { 
    title: string;
    description: string;
    pictures: File[];
}

export interface LocationDocument extends Location, Document {}
export interface LocationModel extends Model<ZombieDocument> {}


