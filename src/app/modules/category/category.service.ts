import { IImageFile } from "../../interface/IImageFile";
import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory = async (categoryData: Partial<ICategory>, icon?: IImageFile) => {
    if (!categoryData.name) {
        throw new Error('Category name is required.');
    }

    const category = new Category({
        ...categoryData,
        icon: icon?.path || null, 
    });

    return await category.save();
};

export const CategoryService = {
    createCategory,
};
