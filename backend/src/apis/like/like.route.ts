import { Router } from 'express';
import {
    getAllLikesController,
    getLikeByLikeScholarshipIdController,
    getLikeByLikeUserIdController,
    toggleLikeController
} from "./like.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {check} from "express-validator";



export const likeRouter = Router();


// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
likeRouter.route('/')
    .get(getAllLikesController)
    .post(asyncValidatorController([check("likeScholarshipId", "Please provide a valid UUID").isUUID()]),isLoggedIn, toggleLikeController);

likeRouter.route('/likeUserId/:likeUserId')
    .get(getLikeByLikeUserIdController);

likeRouter.route('/likeScholarshipId/:likeScholarshipId')
    .get(asyncValidatorController([check("likeScholarshipId", "Please provide a valid UUID").isUUID()]),getLikeByLikeScholarshipIdController)