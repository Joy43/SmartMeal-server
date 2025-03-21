"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const Auth_1 = __importDefault(require("../middleware/Auth"));
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validation_1 = require("./category.validation");
const router = (0, express_1.Router)();
// --------create category----------
router.post('/create-category', (0, Auth_1.default)('admin'), (0, validateRequest_1.default)(category_validation_1.categoryValidation.createCategoryValidationSchema), category_controller_1.CategoryController.createCategory);
exports.categoryRouter = router;
