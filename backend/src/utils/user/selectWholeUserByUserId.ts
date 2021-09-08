import {connect} from "../database.utils";
import {User} from "../interfaces/User";
import {RowDataPacket} from 'mysql2';

export async function selectWholeUserByUserId(UserId: string): Promise<User|null>  {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(userId) as userId, userActivationToken,  userAdmin, userEmail, userHash, userName FROM User WHERE userId = UUID_TO_BIN(:userId)'
        const result = await mysqlConnection.execute(sqlQuery, {UserId}) as RowDataPacket[]
        const rows: User[]  = result[0] as User[]
        return rows.length === 1 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}