import {NextFunction, Request, Response} from "express";
import "express-session";
import {Scholarship} from "../../utils/interfaces/Scholarship";
import {insertScholarship} from "../../utils/scholarship/insertScholarship";
import {selectAllScholarships} from "../../utils/scholarship/selectAllScholarships";
import {Status} from "../../utils/interfaces/Status";
import {selectScholarshipsByCategoryId} from "../../utils/scholarship/selectScholarshipsByCategoryId";
import {User} from "../../utils/interfaces/User";
import {selectScholarshipsByLikeUserId} from "../../utils/scholarship/selectScholarshipByUserId";
import {v1 as uuidv1} from "uuid";

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


//Get scholarship by categoryId
export async function getScholarshipsByCategoryIdController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {
        const{categoryId} = request.params

        // @ts-ignore
        const data = await selectScholarshipsByCategoryId(categoryId)
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

export async function getScholarshipsByUserIdController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {
        // @ts-ignore
        const user = request.session.user as User
        const userId : string = <string> user.userId
        // @ts-ignore
        const data = await selectScholarshipsByLikeUserId(userId)
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

        const {scholarshipAmount,
            scholarshipCriteria,
            scholarshipDeadline,
            scholarshipDescription,
            scholarshipLink,
            scholarshipName} = request.body;
        // const UpdateUser : User = request.session.id as User
        // @ts-ignore
        const userId = <string>request.session?.user.userId;

        const scholarship: Scholarship = {
            scholarshipId: uuidv1(),
            scholarshipAmount,
            scholarshipCriteria,
            scholarshipDeadline,
            scholarshipDescription,
            scholarshipLink,
            scholarshipName
        }
        const result = await insertScholarship(scholarship)
        const status: Status = {
            status: 200,
            message: result,
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.error(error)
        return  response.json({
            status: 500,
            message: "Error submitting scholarship try again later.",
            data: null
        });
    }
}










