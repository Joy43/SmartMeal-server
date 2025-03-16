import { Schema, model } from "mongoose";
import { IMeal, MealModel } from "./mealprovider.interface";

// Define the meal schema
const mealSchema = new Schema<IMeal>(
  {
  
    name: { type: String, required: true, maxlength: 200 },
    price: { type: Number, required: true, min: 0 },
    calories: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: [
        'Vegetarian', 'Vegan', 'Keto', 'Gluten-Free', 'Paleo', 'High-Protein',
        'Organic', 'Halal', 'Kosher', 'Fast Food', 'Gourmet', 'Meal Prep Service',
        'Budget Meals', 'Family Meals', 'Athlete Nutrition', 'Diabetic-Friendly',
        'Low-Carb', 'Mediterranean', 'Asian Cuisine', 'Italian Cuisine',
        'Mexican Cuisine', 'Indian Cuisine'
      ],
      required: true
    },
    description: { type: String, required: true },
    nutritionInfo: { type: String, required: true },
    ingredients: { type: [String], required: true },
    imageUrl: { type: String, required: true },
    reviews: [
      {
       
        rating: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true },
       
      }
    ],
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    availability: { type: Boolean, default: true },
   
  },
  { timestamps: true }
);

// Custom static method
mealSchema.statics.isUserExists = async function (id: string): Promise<IMeal | null> {
  return await this.findById(id);
};


// Create and export the model
const Meal = model<IMeal, MealModel>("Meal", mealSchema);
export default Meal;
