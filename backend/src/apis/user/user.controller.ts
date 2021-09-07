import {NextFunction, Request, Response} from "express";
import "express-session";
import {Status} from "../../utils/interfaces/Status";
import {selectUserByUserActivationToken} from "../../utils/user/selectUserByUserActivationToken";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";
import {selectUserByUserId} from "../../utils/user/selectUserByUserId";
import {User} from "../../utils/interfaces/User";
import {updateUser} from "../../utils/user/updateUser";


// controller for each user statement
// get  statement select user by activation token
export async function getUserByUserActivationTokenController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectUserByUserActivationToken()
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

// get  statement select user by email
export async function getUserByUserEmailController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectUserByUserEmail()
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

// get  statement select user by user Id
export async function getUserByUserIdController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response> {
    try {

        // @ts-ignore
        const data = await selectUserByUserId()
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

// update user
export async function putUserController(request: Request, response: Response) : Promise<Response>{
    try {
        const {userId} = request.params
        const {userEmail, userName} = request.body
        const user = <User>request.session.user
        const userIdFromSession = <string>user.userId

        const preformUpdate = async (user: User) : Promise<Response> => {const previousUser: User = await selectUserByUserId(<string>user.userId) as User
        const newUser: User = {...previousUser}
        await updateUser(newUser)
            return response.json({status: 200, data: null, message: "User successfully updated"})
}

const updateFailed = (message: string) : Response => {
    return response.json({status: 400, data: null, message})
}

return userId === userIdFromSession
    ? preformUpdate({userId, userEmail, userName})
    : updateFailed("you are not allowed to preform this action")
} catch (error) {
    return response.json( {status:400, data: null, message: error.message})
 }
}









