import { model, Schema } from "mongoose";
import { ICategory } from "./category.interface";

// Extend Mongoose Document
interface ICategoryDocument extends Document, ICategory {}

// Define Schema
const categorySchema = new Schema<ICategoryDocument>(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
   
    icon: {
      type: String,
      trim: true,
    },

  },
  { timestamps: true }
);

export const Category = model<ICategoryDocument>("Category", categorySchema);