import {NextFunction, Request, Response} from "express";
import "express-session";
import {Scholarship} from "../../utils/interfaces/Scholarship";
import {insertScholarship} from "../../utils/scholarship/insertScholarship";
import {selectAllScholarships} from "../../utils/scholarship/selectAllScholarships";
import {User} from "../../utils/interfaces/User"
// import {selectScholarshipByCategoryId} from "../../utils/scholarship/selectScholarshipByCategoryId";
import {Status} from "../../utils/interfaces/Status";
import {selectScholarshipByScholarshipId} from "../../utils/scholarship/selectScholarshipByScholarshipId";

// controller for each scholarship statement
// get all scholarships statement
export async function getAllScholarshipsController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectAllScholarships()
        const status: Status = {status: 200, message: null, data};
        return response.json (status);
    } catch (error) {
        return response.json ({
            status: 500,
            message: "There was an error",
            data: []
        })
    }
}

// get scholarship by scholarship ID controller
export async function getScholarshipByScholarshipIdController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectScholarshipByScholarshipId()
        const status: Status = {status: 200, message: null, data};
        return response.json (status);
    } catch (error) {
        return response.json ({
            status: 500,
            message: "There was an error",
            data: []
        })
    }
}

// get scholarship by scholarship name controller

export async function getScholarshipByScholarshipNameController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectScholarshipByScholarshipName()
        const status: Status = {status: 200, message: null, data};
        return response.json (status);
    } catch (error) {
        return response.json ({
            status: 500,
            message: "There was an error",
            data: []
        })
    }
}

// Insert Scholarship Controller
export async function postScholarship(request: Request, response: Response) : Promise<Response<Status>> {
    try {

        const {scholarshipContent} = request.body;
        const user : User = request.session.user as User
        const userId : string = <string>user.userId

        const scholarship: Scholarship = {
            scholarshipId: null,
            scholarshipAmount: null,
            scholarshipCriteria: null,
            scholarshipDeadline: null,
            scholarshipDescription: null,
            scholarshipLink: null,
            scholarshipName: null
        }
        const result = await insertScholarship(scholarship)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        return  response.json({
            status: 500,
            message: "Error submitting scholarship try again later.",
            data: null
        });
    }
}










