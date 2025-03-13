import mongoose, { Schema, model, Document } from "mongoose";

// Review schema
const reviewSchema = new Schema({
  userId: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Meal schema
interface IReview extends Document {
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

interface IMeal extends Document {
  mealId: string;
  name: string;
  price: number;
  calories: number;
  category: string;
  description: string;
  nutritionInfo: string;
  ingredients: string[];
  imageUrl: string;
  reviews: IReview[];
  availability: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

const mealSchema = new Schema<IMeal>(
  {
    mealId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    calories: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    nutritionInfo: { type: String, required: true },
    ingredients: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    reviews: [reviewSchema], 
    availability: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  { timestamps: true }
);


const Meal = model<IMeal>("Meal", mealSchema);

export default Meal;
