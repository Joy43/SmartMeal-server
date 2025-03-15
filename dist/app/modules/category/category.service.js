"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const category_model_1 = require("./category.model");
const createCategory = (categoryData, icon) => __awaiter(void 0, void 0, void 0, function* () {
    if (!categoryData.name) {
        throw new Error('Category name is required.');
    }
    const category = new category_model_1.Category(Object.assign(Object.assign({}, categoryData), { icon: (icon === null || icon === void 0 ? void 0 : icon.path) || null }));
    return yield category.save();
});
const getAllCategory = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const categoryQuery = new QueryBuilder_1.default(category_model_1.Category.find().populate('parent'), query)
        .search(['name', 'slug'])
        .filter()
        .sort()
        .paginate()
        .fields();
    const categories = yield categoryQuery.modelQuery;
    const meta = yield categoryQuery.countTotal();
    const categoryMap = new Map();
    const hierarchy = [];
    categories.forEach((category) => {
        categoryMap.set(category._id.toString(), Object.assign(Object.assign({}, category.toObject()), { children: [] }));
    });
    categories.forEach((category) => {
        var _a, _b;
        const parentId = (_b = (_a = category.parent) === null || _a === void 0 ? void 0 : _a._id) === null || _b === void 0 ? void 0 : _b.toString();
        if (parentId && categoryMap.has(parentId)) {
            categoryMap.get(parentId).children.push(categoryMap.get(category._id.toString()));
        }
        else if (!parentId) {
            hierarchy.push(categoryMap.get(category._id.toString()));
        }
    });
    return {
        meta,
        result: hierarchy,
    };
});
exports.CategoryService = {
    createCategory, getAllCategory
};
