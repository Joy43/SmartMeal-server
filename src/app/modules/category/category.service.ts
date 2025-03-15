import QueryBuilder from "../../builder/QueryBuilder";
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

const getAllCategory = async (query: Record<string, unknown>) => {
    const categoryQuery = new QueryBuilder(
      Category.find().populate('parent'),
      query,
    )
      .search(['name', 'slug'])
      .filter()
      .sort()
      .paginate()
      .fields();
  
    const categories = await categoryQuery.modelQuery;
    const meta = await categoryQuery.countTotal();
  
    const categoryMap = new Map<string, any>();
    const hierarchy: any[] = [];
  
    categories.forEach((category: any) => {
      categoryMap.set(category._id.toString(), { ...category.toObject(), children: [] });
    });
  
    categories.forEach((category: any) => {
      const parentId = category.parent?._id?.toString();
      if (parentId && categoryMap.has(parentId)) {
        categoryMap.get(parentId).children.push(categoryMap.get(category._id.toString()));
      } else if (!parentId) {
        hierarchy.push(categoryMap.get(category._id.toString()));
      }
    });
  
    return {
      meta,
      result: hierarchy,
    };
  };
  
export const CategoryService = {
    createCategory,getAllCategory
};
