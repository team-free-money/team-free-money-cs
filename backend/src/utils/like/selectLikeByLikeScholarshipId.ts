import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";
import {RowDataPacket} from 'mysql2';

export async function selectLikeByLikeScholarshipId(likeScholarshipId: string): Promise<Like[]> {
    try {
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeScholarshipId) as likeScholarshipId, BIN_TO_UUID(likeUserId) as likeUserId FROM `like` WHERE likeScholarshipId = UUID_TO_BIN(:likeScholarshipId)'
        const result : RowDataPacket[]= await mysqlConnection.execute(mySqlSelectQuery, {likeScholarshipId}) as RowDataPacket[]
        const rows: Like[] = result[0] as Like[]
        return rows
    } catch(error) {
        throw error
    }
}