import { IImageFile } from "../../interface/IImageFile";
import { ICategory } from "./category.interface";
import { Category } from "./category.model";

const createCategory=async(
    categoryData:Partial<ICategory>,
    icon:IImageFile,
)=>{
    const category = new Category({
        ...categoryData,
        icon: icon?.path
      });
    
      const result = await category.save();
    
      return result;
    };  


    export const CategoryService={
        createCategory,
    }