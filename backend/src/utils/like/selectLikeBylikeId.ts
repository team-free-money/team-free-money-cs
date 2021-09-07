import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";
import {RowDataPacket} from 'mysql2';

export async function selectLikeByLikeId(like: Like): Promise<Like|null> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeUserId) as likeUserId, BIN_TO_UUID(likeScholarshipId) as likeScholarshipId FROM `like` WHERE likeUserId = UUID_TO_BIN(:likeUserId) AND likeScholarshipId = UUID_TO_BIN(:likeScholarshipId)'
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, like) as RowDataPacket[]
        const rows: Like[] = result[0] as Like[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch(error) {
        throw error
    }
}