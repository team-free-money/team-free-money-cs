import {NextFunction, Request, Response} from "express";
import "express-session";
import passport from "passport";
import passportLocal, {Strategy} from 'passport-local';
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User";
import uuid from "uuid";
import {selectUserByUserEmail} from "../../utils/user/selectUserByUserEmail";

export async function signInController(request: Request, response: Response, nextFunction: NextFunction):Promise<Response|undefined> {

    try {

        const {userHash} = request.body;

        passport.authenticate(
            'local',
            {session: false},
            async (err: any, passportUser: User) => {
                console.log(passportUser)
                const {userId, userActivationToken, userEmail, userHash, userName} = passportUser;
                const signature: string = uuid();
                const authorization: string = generateJwt({
                    userId,
                    userActivationToken,
                    userEmail,
                    userHash,
                    userName
                }, signature);

                const signInFailed = (message: string) => response.json({
                    status: 400,
                    data: null,
                    message
                });

                const signInSuccessful = () => {

                    if (request.session) {
                        request.session.user = passportUser;
                        request.session.jwt = authorization;
                        request.session.signature = signature;
                    }

                    response.header({
                        authorization
                    });

                    return response.json({status: 200, data: null, message: "sign in successful"})
                };

                const isPasswordValid: boolean = passportUser && await validatePassword(passportUser.userHash, userHash);

                return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password");
            })(request, response, nextFunction)
    } catch (error) {
    return response.json({status: 500, data: null, message: error.message})
        }
    }

    const LocalStrategy = passportLocal.Strategy;

    export const passportStrategy: Strategy = new LocalStrategy(
        {
            usernameField: 'userEmail',
            passwordField: "userHash"
        },
        async (email, password, done) => {
            try{

                const user: User | null = await selectUserByUserEmail(email);

                return user ? done(null, user) : done(undefined, undefined, {message: 'Incorrect username or password'});
            } catch (error) {
                return done(error);
            }
        }
    );