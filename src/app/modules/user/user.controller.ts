

import catchAsync from "../utils/catchAsync";
import sendResponse from "../utils/sendRequest";
import { userService } from "./user.service";
import httpStatus from 'http-status';



// --------create user----------
const createUser = catchAsync(

    async (req, res) => {
      const payload = req.body
  
      const result = await userService.createUser(payload)
  
     
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user is created succesfully',
        data: result,
      });
    });
   
//   -----------get usrer all-----------
  const getUser = catchAsync(async (req, res) => {
    const result = await userService.getUser()
  
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
      message: 'Users getting successfully',
      data: result,
    })
  })
//   -----------single user get-------------
const getSingleUser = catchAsync(async (req, res) => {
  console.log("📩 Received userId:", req.params.userId);

  const userId = req.params.userId;
  const result = await userService.getSingleUser(userId);

  console.log("🔎 Database Query Result:", result);

  sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User getting successfully",
      data: {
        result
      }
  });
});


//   ------------update user----------------
  const updateUser = catchAsync(async (req, res) => {
    const userId = req.params.userId
    const body = req.body
    const result = await userService.updateUser(userId, body)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      message: 'User updated successfully',
      data: {
        result
      },
    })
  })
//   ------------delete user----------------
  const deleteUser = catchAsync(async (req, res) => {
    const userId = req.params.userId
    await userService.deleteUser(userId)
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success:true,
      message: 'user deleted successfully',
      data: {},
    })
  })
  
  export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
  }