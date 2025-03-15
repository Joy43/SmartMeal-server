"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// --------------Review schema------------------
const reviewSchema = new mongoose_1.Schema({
    userId: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const mealSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Meal = (0, mongoose_1.model)("Meal", mealSchema);
exports.default = Meal;
