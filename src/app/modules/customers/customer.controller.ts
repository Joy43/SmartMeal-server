import { Request, Response } from "express";
import { customerService } from "./customers.service";

export const customersController={
    async getAll(req:Request,res:Response){
  const data=await customerService.getAll();
  res.json(data)
    }
}