import {Router} from "express";
import {
    getAllScholarshipsController,
    getScholarshipByScholarshipIdController,
    getScholarshipByScholarshipNameController,
    getScholarshipsByCategoryIdController,
    getScholarshipsByUserIdController,
    postScholarship,
} from "./scholarship.controller";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller"
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {scholarshipValidator} from "./scholarship.validator";



export const scholarshipRoute = Router();
scholarshipRoute.route("/").get(getAllScholarshipsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(scholarshipValidator)), postScholarship)
scholarshipRoute.route("/userId").get(isLoggedIn, getScholarshipsByUserIdController)
scholarshipRoute.route("/scholarshipId/:scholarshipId").get(  asyncValidatorController([
    check("scholarshipId", "please provide a valid scholarshipId").isUUID()
]), getScholarshipByScholarshipIdController)

scholarshipRoute.route("/scholarshipName/:scholarshipName").get(  asyncValidatorController([
    check("scholarshipName", "please provide a valid scholarshipName")
]), getScholarshipByScholarshipNameController)

scholarshipRoute.route("/categoryId/:categoryId").get(asyncValidatorController([check("categoryId", "please provide a valid categoryId").isUUID()]), getScholarshipsByCategoryIdController)




