import {NextFunction, Request, Response} from "express";
import {selectUserByUserActivationToken} from "../../utils/user/selectUserByUserActivationToken";
import {User} from "../../utils/interfaces/User";
import {Status} from '../../utils/interfaces/Status';

export async function activationController(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    const {activation} = request.params
    try {

        const user = await selectUserByUserActivationToken(activation)

        const activationFailed = () : Response => response.json({
            status: 400,
            data: null,
            message: "Account activation has failed. Have you already activated this account?"
        });

        const activationSucceeded = async (user: User):Promise<Response> => {

            const updateUser = {...user, userActivationToken: null}
            await updateUser(updatedUser)
            return response.json({
                status: 200,
                data: null,
                message: "Account activation was successful"
            });
        }

        return user ? await activationSucceeded(user) : activationFailed()
    } catch (error) {
        return response.json({
            status: 500,
            data: null,
            message: error.message
        })
    }
}