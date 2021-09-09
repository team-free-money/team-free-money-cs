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
