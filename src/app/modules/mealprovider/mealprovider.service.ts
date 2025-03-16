import { IMeal } from "./mealprovider.interface";
import Meal from "./mealprovider.model";

// Create a new meal and populate the author
const createMeal = async (payload: IMeal) => {
    const meal = await Meal.create(payload);
    return Meal.findById(meal._id).populate('author');
};

export const mealService = {
    createMeal,
};
