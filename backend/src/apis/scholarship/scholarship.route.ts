import {Router} from "express";
// import {scholarshipValidator} from "../../apis/scholarship/scholarship.validator";
import {
    getAllScholarshipsController,
    getScholarshipByScholarshipIdController,
    getScholarshipByScholarshipNameController, getScholarshipsByCategoryIdController, getScholarshipsByUserIdController
} from "./scholarship.controller";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller"
import {check} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";


export const scholarshipRoute = Router();
scholarshipRoute.route("/").get(getAllScholarshipsController)
scholarshipRoute.route("/user").get(isLoggedIn, getScholarshipsByUserIdController)
scholarshipRoute.route("/scholarshipId/:scholarshipId").get(  asyncValidatorController([
    check("scholarshipId", "please provide a valid scholarshipId").isUUID()
]), getScholarshipByScholarshipIdController)

scholarshipRoute.route("/scholarshipName/:scholarshipName").get(  asyncValidatorController([
    check("scholarshipName", "please provide a valid scholarshipName")
]), getScholarshipByScholarshipNameController)

scholarshipRoute.route("/categoryId/:categoryId").get(asyncValidatorController([check("categoryId", "please provide a valid categoryId").isUUID()]), getScholarshipsByCategoryIdController)

