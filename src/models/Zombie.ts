import { model } from "mongoose";
import { ZombieDocument } from "../types/types";
import ZombieSchema from "../schemas/zombieSchema";

export const zombieModel = model<ZombieDocument>("Zombie", ZombieSchema);