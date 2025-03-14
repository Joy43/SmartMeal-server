import { USER_ROLE } from '../user/user.contant';
export interface TLoginUser{
    email:string,
    password:string
}

export interface IJwtPayload {
    userId: string;
    name: string;
    email: string;
    role: typeof USER_ROLE;
    isActive: boolean;
  }