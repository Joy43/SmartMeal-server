import { Types } from "mongoose";

export interface ICategory extends Document {
  id: Types.ObjectId;
  name: string;
  description?: string;
  parent?: Types.ObjectId;
  icon?: string;
  createdAt?: Date;
  updatedAt?: Date;
  products?: Types.ObjectId[]; }