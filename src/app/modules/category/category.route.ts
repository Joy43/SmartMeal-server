import { Router } from "express";
import auth from "../middleware/Auth";
import validateRequest from "../middleware/validateRequest";
import { CategoryController } from "./category.controller";
import { categoryValidation } from "./category.validation";

const router=Router();
// --------create category----------
router.post('/mealprovider',auth('admin'),validateRequest(categoryValidation.createCategoryValidationSchema),CategoryController.createCategory);

export const categoryRouter=router;