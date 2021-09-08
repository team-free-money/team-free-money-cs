import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";
<<<<<<< HEAD
import {getUserByUserEmailController, getUserByUserIdController} from "./user.controller";

=======
import {getAllUsersController, getUserByUserEmailController, getUserByUserIdController} from "./user.controller";
>>>>>>> 47076d5eebb9be882a39eb6da859bc1e7b45d669


export const userRoute = Router();

userRoute.route("/").get(getAllUsersController)

userRoute.route("/userId/").get(  asyncValidatorController([
    check("userId", "please provide a valid userId").isUUID()
]), getUserByUserIdController)

userRoute.route("/userEmail/").get(  asyncValidatorController([
    check("userEmail", "please provide a valid userEmail").isEmail()
]), getUserByUserEmailController)
