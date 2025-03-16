import { Router } from "express";
import auth from "../middleware/Auth";
import validateRequest from "../middleware/validateRequest";
import { mealValidation } from "./mealprovider.validation";
import { mealController } from "./mealprovider.controller";
import { USER_ROLE } from "../user/user.contant";

const router=Router();
router.post('/create-meal',auth(USER_ROLE.admin),validateRequest(mealValidation.createMealValidationSchema),mealController.createMeal);
export const mealRoute=router;