import { Router } from 'express';
import { signupUserController} from "./sign-up.controller";
import { signUpValidator } from './sign-up.validator';
import { asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {activationController} from "./activation.controller";
import {param} from "express-validator";

const { checkSchema } = require('express-validator');

export const signUpRouter = Router();

signUpRouter.route('/')
.post(
    asyncValidatorController(checkSchema(signUpValidator)),
    signupUserController
);

signUpRouter.route('/activation/:activation')
.get(
    asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
    activationController
)

