import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";
import {RowDataPacket} from 'mysql2';

export async function selectLikeByLikeUserId(like: Like): Promise<Like|null> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeUserId) as likeUserId, BIN_TO_UUID(userId) as likeId FROM `like` WHERE likeUserId = UUID_TO_BIN(:likeUserId)'
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, like) as RowDataPacket[]
        const rows: Like[] = result[0] as Like[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch(error) {
        throw error
    }
}