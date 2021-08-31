import {User} from "../interfaces/User";
import {connect} from "../database.utils";

export async function updateUser(user: User): Promise<string> {
    try {
        const mysqlConnection = await connect();
        const query : string = 'UPDATE user SET userActivationToken = :userActivationToken, userEmail = :userEmail, userHash = :userHash, userName = :userName WHERE userId = UUID_TO_BIN(:userId)';
        await mysqlConnection.execute(query, user)
        return 'Profile successfully updated'
    } catch (error) {
        throw error
    }
}