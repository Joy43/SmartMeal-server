import express from 'express';

import { UserValidation } from './user.validation';
import { userController } from './user.controller';
import validateRequest from '../middleware/validateRequest';

const router=express.Router();
router.post(
    '/user-create',
    validateRequest(UserValidation.userValidationSchema),
    userController.createUser
)
router.post('/create-admin', validateRequest(UserValidation.userValidationSchema), userController.createUser)
router.get('/',userController.getUser)
router.get('/:userId', userController.getSingleUser)
router.put('/:userId', userController.updateUser)
router.delete('/:userId',userController.deleteUser)

export const userRouter=router;