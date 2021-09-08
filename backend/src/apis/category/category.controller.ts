import {NextFunction, Request, Response} from "express";
import "express-session";
import {Status} from "../../utils/interfaces/Status";
import {selectCategoryByCategoryId} from "../../utils/category/selectCategoryByCategoryId";
import {selectAllScholarships} from "../../utils/scholarship/selectAllScholarships";
import {selectAllCategories} from "../../utils/category/selectAllCategories";

// get category by category ID controller

export async function getCategoryByCategoryIdController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectCategoryByCategoryId()
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

// get category by name controller

export async function getCategoryByNameController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectCategoryByCategoryName()
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


//get allCategories
export async function getAllCategoriesController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        const data = await selectAllCategories()
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





