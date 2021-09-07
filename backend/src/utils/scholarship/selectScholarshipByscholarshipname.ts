import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectTweetsByTweetProfileId(tweetProfileId: string) : Promise<Scholarship[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT scholarshipName, BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink FROM category INNER JOIN scholarshipCategory ON scholarshipCategory.scholarshipCategoryCategoryId = categoryID INNER JOIN scholarship ON scholarshipCategory.scholarshipCategoryScholarshipId = scholarship.scholarshipId ORDER BY scholarshipName;"
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {tweetProfileId})
        return result[0] as Scholarship[]
    } catch (error) {
        throw error
    }
}