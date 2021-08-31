import {connect} from "../database.utils";
import {User} from "../interfaces/User";
import {RowDataPacket} from 'mysql2';

export async function selectUserByUserId (userId: string): Promise<User|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(userId) as userId, userEmail, userHash FROM user WHERE userId = UUID_TO_BIN(:userId)"
        const result = await mysqlConnection.execute(mysqlQuery ,{userId}) as RowDataPacket[]
        const rows: User[]  = result[0] as User[]
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        throw error
    }
}