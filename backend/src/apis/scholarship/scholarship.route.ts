import {Router} from "express";
import {scholarshipValidator} from "../../apis/scholarship/scholarship.validator";
import {getAllScholarshipsController, getScholarshipByScholarshipIdController, getScholarshipByScholarshipNameController} from "./scholarship.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";

export const scholarshipRoute = Router();
scholarshipRoute.route("/").get(getAllScholarshipsController)

scholarshipRoute.route("/scholarshipId/").get(  asyncValidatorController([
    check("scholarshipId", "please provide a valid scholarshipId").isUUID()
]), getScholarshipByScholarshipIdController)

scholarshipRoute.route("/scholarshipName/").get(  asyncValidatorController([
    check("scholarshipId", "please provide a valid scholarshipName")
]), getScholarshipByScholarshipNameController)
