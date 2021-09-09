import {Scholarship} from "../interfaces/Scholarship";
import {User} from "../interfaces/User";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';
import {Like} from "../interfaces/Like";

export async function selectScholarshipsByLikeUserId(likeUserId: string) : Promise<Scholarship[]> {
    try {

        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName FROM scholarship INNER JOIN `like` ON ScholarshipId = likeScholarshipId WHERE likeUserId = uuid_to_bin(:likeUserId)"
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {likeUserId})
        return result[0] as Scholarship[]
    } catch (error) {
        throw error
    }
}