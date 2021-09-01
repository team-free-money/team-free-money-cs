
import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";

export async function insertLike(like: Like): Promise<string> {
    try {
        const mySqlConnection = await connect()
        const mySqlQuery = "INSERT INTO `like`(likeScholarshipId, likeUserId) VALUES(UUID_TO_BIN(:likeScholarshipId), UUID_TO_BIN(:likeUserId)";
        await mySqlConnection.execute(mySqlQuery, like)
        return "Like successfully inserted"
    } catch(error) {
        throw error
    }
}
