import { model } from "mongoose";
import { LocationDocument } from "../types/types";
import LocationSchema from "../schemas/locationSchema";

export const locationModel = model<LocationDocument>("Location", LocationSchema);