import {Router} from "express";
// import {scholarshipValidator} from "../../apis/scholarship/scholarship.validator";
import {getAllScholarshipsController} from "./scholarship.controller";
// import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
// import {check} from "express-validator";
// import {checkSchema} from "express-validator";

export const scholarshipRoute = Router();
scholarshipRoute.route("/").get(getAllScholarshipsController)
