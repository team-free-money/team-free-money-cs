import {NextFunction, Request, Response} from "express";
import "express-session";
import {Scholarship} from "../../utils/interfaces/Scholarship";
import {insertScholarship} from "../../utils/scholarship/insertScholarship";
import {selectAllScholarships} from "../../utils/scholarship/selectAllScholarships";
// import {selectScholarshipByCategoryId} from "../../utils/scholarship/selectScholarshipByCategoryId";
import {Status} from "../../utils/interfaces/Status";

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

