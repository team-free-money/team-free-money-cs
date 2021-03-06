import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";
import {getAllUsersController, getUserByUserEmailController, getUserByUserIdController} from "./user.controller";


export const userRoute = Router();

userRoute.route("/").get(getAllUsersController)

userRoute.route("/userId/").get(  asyncValidatorController([
    check("userId", "please provide a valid userId").isUUID()
]), getUserByUserIdController)

userRoute.route("/userEmail/").get(  asyncValidatorController([
    check("userEmail", "please provide a valid userEmail").isEmail()
]), getUserByUserEmailController)
