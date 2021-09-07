import {connect} from "../database.utils";
import {User} from "../interfaces/User";

export async function insertUser(user: User) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO `user`( userId, userActivationToken, userEmail, userHash, userName) VALUES (UUID_TO_BIN(UUID()), :userActivationToken, :userEmail, :userHash, :userName)';
        await mysqlConnection.execute(query, user);
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}