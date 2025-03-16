import mongoose, { Model } from "mongoose";

// Define meal categories as a TypeScript type
export type MealCategory = 
  | 'Vegetarian' 
  | 'Vegan' 
  | 'Keto' 
  | 'Gluten-Free' 
  | 'Paleo' 
  | 'High-Protein' 
  | 'Organic' 
  | 'Halal' 
  | 'Kosher' 
  | 'Fast Food' 
  | 'Gourmet' 
  | 'Meal Prep Service' 
  | 'Budget Meals' 
  | 'Family Meals' 
  | 'Athlete Nutrition' 
  | 'Diabetic-Friendly' 
  | 'Low-Carb' 
  | 'Mediterranean' 
  | 'Asian Cuisine' 
  | 'Italian Cuisine' 
  | 'Mexican Cuisine' 
  | 'Indian Cuisine';

// Define Review interface
export interface IReview {
   
    rating: number;
    comment: string;
  
}

// Define Meal interface
export interface IMeal {
   
    name: string;
    price: number;
    calories: number;
    category: MealCategory; 
    description: string;
    nutritionInfo: string;
    ingredients: string[];
    imageUrl: string;
    reviews: IReview[];
    availability: boolean;
    author: mongoose.Schema.Types.ObjectId;
  
}

// Define Meal model interface with custom method
export interface MealModel extends Model<IMeal> {
    isUserExists(id: string): Promise<IMeal | null>;
}
