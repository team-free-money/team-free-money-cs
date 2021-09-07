import {Router} from "express";
import {check} from "express-validator";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {getCategoryByCategoryIdController, getCategoryByNameController} from "./category.controller";


export const categoryRoute = Router();
categoryRoute.route("/category/").get(  asyncValidatorController([
    check("categoryId", "please provide a valid categoryId").isUUID()
]), getCategoryByCategoryIdController)

categoryRoute.route("/categoryName/").get(  asyncValidatorController([
    check("categoryName", "please provide a valid categoryName")
]), getCategoryByNameController)