import {NextFunction, Request, Response} from 'express';
import {verify, VerifyErrors} from 'jsonwebtoken';
import {Status} from "../interfaces/Status";
import {User} from "../interfaces/User";
import {IncomingHttpHeaders} from 'http';

export function isLoggedIn(request: Request, response: Response, next: NextFunction): Response | void {

    let status: Status = {status: 400, message: 'Please login', data: null};

    const sessionUser = (request: Request): User | undefined => request.session?.profile ?? undefined;
    console.log(request.sessionID)

    const signature = (request: Request): string => request.session?.signature ?? 'no signature'

    const isSessionActive = (isProfileActive: Profile | undefined): boolean => isProfileActive ? true : false;

    const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {

        return headers['authorization']
    };

    const unverifiedJwtToken: string | undefined = getJwtTokenFromHeader(request.headers);

    const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
        if (unverifiedJwtToken === undefined) {
            return false
        }

        const result: unknown = verify(
            unverifiedJwtToken,
            signature(request),
            {maxAge: '3hr'},
            (error: VerifyErrors | null): boolean => error ? false : true
        ) as unknown

        console.log(result)
        return result as boolean
    }

    return isJwtValid(unverifiedJwtToken) && isSessionActive(sessionUser(request)) ? next() : response.json(status);
}