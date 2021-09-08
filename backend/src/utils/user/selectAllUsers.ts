
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {User} from "../interfaces/User";


export async function selectAllUsers(): Promise<User|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(userId) as userId, userEmail, userHash FROM user"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return result[0] as User[]
    }
    catch (error){
        throw error
    }
}

