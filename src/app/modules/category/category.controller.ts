import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { CategoryService } from "./category.service";
import { IImageFile } from "../../interface/IImageFile";
import sendResponse from "../utils/sendRequest";
import { StatusCodes } from "http-status-codes";

const createCategory = catchAsync(async (req: Request, res: Response) => {
    console.log("Received Request Body:", req.body); 

    const result = await CategoryService.createCategory(
        req.body,
        req.file as IImageFile,
    );

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: 'Category created successfully',
        data: result,
    });
});
const getAllCategory = catchAsync(async (req, res) => {
    const result = await CategoryService.getAllCategory(req.query);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'category are retrieved succesfully',
    
      data: result.result,
    });
  });

export const CategoryController = { createCategory,getAllCategory };
