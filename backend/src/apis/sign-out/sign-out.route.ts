import {Router} from "express";
import {signOutController} from "./sign-out.controller";


export const SignOutRouter: Router = Router();

SignOutRouter.route('/')
    .get(signOutController);