
import { TUser } from "./user.interface";
import User from "./user.model";


const createUser = async (payload: TUser): Promise<TUser> => {
  payload.role = 'admin';
  const result = await User.create(payload)

  return result
}

const getUser = async () => {
  const result = await User.find()
  return result
}

const getSingleUser = async (id: string) => {
  const result = await User.findOne({ _id: id }); 
  return result;
};

const updateUser = async (id: string, data: TUser) => {
  const result = await User.findByIdAndUpdate(id, data, {
    new: true,
  })
  return result
}

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id)
  return result
}

export const userService = {
  createUser,
  getUser,
  getSingleUser,
  updateUser,
  deleteUser,
}