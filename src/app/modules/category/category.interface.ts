import { Types } from "mongoose";

export interface ICategory extends Document {
  id: Types.ObjectId;
  name: string;
  description?: string;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
}