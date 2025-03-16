import { Router } from "express";
import { authRoute } from "../modules/auth/auth.router";
import { userRouter } from "../modules/user/user.route";
import { categoryRouter } from "../modules/category/category.route";
import { mealRoute } from "../modules/mealprovider/mealprovider.routes";

const router=Router();
const moduleRoutes=[
    {
        path:'/user',
        route:userRouter
    },
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/category',
        route:categoryRouter
    },
    {
        path:'/meal',
        route:mealRoute
    }
]
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;