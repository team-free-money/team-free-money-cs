import {Router} from "express";
import {scholarshipValidator} from "../../apis/scholarship/scholarship.validator";
import {
    getAllScholarshipsController,
    getScholarshipByCategoryNameGeneralController,
    getScholarshipByCategoryNameHispanicController,
    getScholarshipByCategoryNameNativeAmericanController,
    getScholarshipByCategoryNameVeteranController,
    getScholarshipByCategoryNameWomenController,
    getScholarshipByScholarshipIdController,
    getScholarshipByScholarshipNameController
} from "./scholarship.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {check} from "express-validator";
import {checkSchema} from "express-validator";

export const scholarshipRoute = Router();
scholarshipRoute.route("/").get(getAllScholarshipsController)

scholarshipRoute.route("/scholarshipId/").get(  asyncValidatorController([
    check("scholarshipId", "please provide a valid scholarshipId").isUUID()
]), getScholarshipByScholarshipIdController)

scholarshipRoute.route("/scholarshipName/").get(  asyncValidatorController([
    check("scholarshipName", "please provide a valid scholarshipName")
]), getScholarshipByScholarshipNameController)



scholarshipRoute.route("/scholarshipCategoryNameGeneral/").get(  asyncValidatorController([
    check("CategoryNameGeneral", "please provide a valid Category Name")
]), getScholarshipByCategoryNameGeneralController)

scholarshipRoute.route("/scholarshipCategoryNameHispanic/").get(  asyncValidatorController([
    check("CategoryNameHispanic", "please provide a valid Category Name")
]), getScholarshipByCategoryNameHispanicController)

scholarshipRoute.route("/scholarshipCategoryNameNative-American/").get(  asyncValidatorController([
    check("CategoryNameNative-American", "please provide a valid Category Name")
]), getScholarshipByCategoryNameNativeAmericanController)

scholarshipRoute.route("/scholarshipCategoryNameVeteran/").get(  asyncValidatorController([
    check("CategoryNameVeteran", "please provide a valid scholarshipName")
]), getScholarshipByCategoryNameVeteranController)

scholarshipRoute.route("/scholarshipCategoryNameWomen/").get(  asyncValidatorController([
    check("CategoryNameWomen", "please provide a valid scholarshipName")
]), getScholarshipByCategoryNameWomenController)
