import { z } from "zod";

const createMealValidationSchema = z.object({
  body: z.object({
 
    name: z.string({
      required_error: 'Meal name is required',
      invalid_type_error: 'Meal name must be a string',
    }).max(200, 'Meal name cannot exceed 200 characters'),
    price: z.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    }).min(0, 'Price must be a positive number'),
    calories: z.number({
      required_error: 'Calories are required',
      invalid_type_error: 'Calories must be a number',
    }).min(0, 'Calories must be a positive number'),
    category: z.enum([
      'Vegetarian', 'Vegan', 'Keto', 'Gluten-Free', 'Paleo', 'High-Protein',
      'Organic', 'Halal', 'Kosher', 'Fast Food', 'Gourmet', 'Meal Prep Service',
      'Budget Meals', 'Family Meals', 'Athlete Nutrition', 'Diabetic-Friendly',
      'Low-Carb', 'Mediterranean', 'Asian Cuisine', 'Italian Cuisine',
      'Mexican Cuisine', 'Indian Cuisine'
    ], {
      required_error: 'Category is required',
    }),
    description: z.string({
      required_error: 'Description is required',
      invalid_type_error: 'Description must be a string',
    }),
    nutritionInfo: z.string({
      required_error: 'Nutrition information is required',
      invalid_type_error: 'Nutrition information must be a string',
    }),
    ingredients: z.array(z.string(), {
      required_error: 'Ingredients are required',
    }).min(1, 'At least one ingredient is required'),
    imageUrl: z.string({
      required_error: 'Image URL is required',
      invalid_type_error: 'Image URL must be a string',
    }).url('Invalid URL format'),
    reviews: z.array(
      z.object({
    
        rating: z.number({
          required_error: 'Rating is required',
          invalid_type_error: 'Rating must be a number',
        }).min(1).max(5, 'Rating must be between 1 and 5'),
        comment: z.string({
          required_error: 'Comment is required',
          invalid_type_error: 'Comment must be a string',
        }),
       
      })
    ).optional(),
    availability: z.boolean().optional(),
  }),
});

export const mealValidation = {
  createMealValidationSchema,
};
