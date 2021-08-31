import {Request, Response} from 'express';
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {User} from "../../utils/interfaces/User";
import {Status} from "../../utils/interfaces/Status";
import MailComposer from "nodemailer/lib/mail-composer";
import {insertUser} from "../../utils/user/insertUser";

const mailgun = require("mailgun-js")

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
// userId, userActivationToken, userAdmin, userEmail, userHash, userName

export async function signupUserController(request: Request, response: Response) : Promise<Response|undefined> {
    try {


        const {userEmail, userHash, userName} = request.body;
        const profileHash = await setHash(userHash);
        const userActivationToken = setActivationToken();
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${userActivationToken}`
        console.log(userActivationToken)

        const message = `<h2>Welcome to New Mexico Scholarship Finders.</h2>
<p>In order to like and see top scholarships you must confirm your account </p>
<p><a href="${basePath}">${basePath}</a></p>
`
        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: userEmail,
            subject: "One step closer to Account Activation",
            text: 'Test email text',
            html: message
        }

        const user: User = {
            userId: null,
            userActivationToken,
            userEmail,
            userHash,
            userName
        };

        await insertUser(user)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});

            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: userEmail,
                message: message.toString("ascii")
            }

            const status: Status = {
                status: 200,
                message: "Profile successfully created please check your email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    return response.json({status:418, data:null, message: "error sending email"})
                }
                return response.json(status);
            });
        })
    } catch (error) {
        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}