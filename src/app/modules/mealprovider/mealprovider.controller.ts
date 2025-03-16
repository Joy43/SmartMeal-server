// mealprovider.controller.ts
import { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync";
import { mealService } from "./mealprovider.service";
import sendResponse from "../utils/sendRequest";

const createMeal = catchAsync(async (req, res) => {
    const user = req.user as JwtPayload;
    const userId = user._id;
    
    if (!userId) {
        res.status(401).json({ success: false, message: 'User ID missing in token' });
        return;
    }
    
    const mealData = { ...req.body, author: userId };
    const meal = await mealService.createMeal(mealData);
    
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Meal created successfully',
        data: meal,
    });
});

export const mealController = {
    createMeal
};
