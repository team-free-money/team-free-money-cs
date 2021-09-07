import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";
import {getUserByUserEmailController, getUserByUserIdController} from "./user.controller";


export const userRoute = Router();

userRoute.route("/userId/").get(  asyncValidatorController([
    check("userId", "please provide a valid userId").isUUID()
]), getUserByUserIdController)

userRoute.route("/userEmail/").get(  asyncValidatorController([
    check("userEmail", "please provide a valid userEmail").isEmail()
]), getUserByUserEmailController)
