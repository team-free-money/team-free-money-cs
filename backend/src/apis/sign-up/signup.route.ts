import { Router } from 'express';
import { signupUserController} from "./sign-up.controller";
import { signupValidator } from './signup.validator';
import { asyncValidatorController} from "../../utils/controllers/asnycValidator.controller";
import {activationController} from "./activation.controller";
import {param} from "express-validator";

const { checkSchema } = require('express-validator');

const router: Router = Router();

router.route('/')
.post(
    asyncValidatorController(checkSchema(signupValidator)),
    signupUserController
);

router.route('/activation/:activation')
.get(
    asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
    activationController
)

export default router;