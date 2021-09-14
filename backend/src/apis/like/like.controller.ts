import {Request, Response} from 'express';

// DB

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {User} from "../../utils/interfaces/User";
import {Like} from "../../utils/interfaces/Like";
import {selectLikeByLikeId} from "../../utils/like/selectLikeByLikeId";
import {deleteLike} from "../../utils/like/deleteLike";
import {insertLike} from "../../utils/like/insertLike";
import {toggleLike} from "../../utils/like/toggleLike";
import {selectAllLikes} from "../../utils/like/selectAllLikes";
import {selectLikeByLikeScholarshipId} from "../../utils/like/selectLikeByLikeScholarshipId";
import {selectLikeByLikeUserId} from "../../utils/like/selectLikeByLikeUserId";


export async function toggleLikeController(request: Request, response: Response): Promise<Response<string>> {

    try {

        const {likeScholarshipId} = request.body;
        // @ts-ignore
        const user = <User>request.session.user
        const likeUserId = <string>user.userId

        const like: Like = {
            likeUserId,
            likeScholarshipId,
        }
        const select = await selectLikeByLikeId(like)

        if (select !== null){
            const result = await deleteLike(like)
        }else{
            const result = await insertLike(like)
        }

        const status: Status = {
            status: 200,
            message: 'Like successfully updated',
            data: null
        };
        return response.json(status);

    } catch(error) {
        console.error(error)
        // @ts-ignore
        return(response.json({status: 500, data: null, message: error.message}))
    }
}

export const getAllLikesController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const mySqlResult = await selectAllLikes()
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        // @ts-ignore
        return (response.json({status: 400, data: null, message: error.message}))
    }
};


export const getLikeByLikeScholarshipIdController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const {likeScholarshipId} = request.params;
        const mySqlResult = await selectLikeByLikeScholarshipId(likeScholarshipId)
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error) {
        // @ts-ignore
        return (response.json({status: 400, data: null, message: error.message}))
    }
};

export const getLikeByLikeUserIdController = async (request: Request, response: Response): Promise<Response> => {
    try {
        const{likeUserId} = request.params;
        const mySqlResult = await selectLikeByLikeUserId(likeUserId)
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error) {
        // @ts-ignore
        return (response.json({status: 400, data: null, message: error.message}))
    }
}