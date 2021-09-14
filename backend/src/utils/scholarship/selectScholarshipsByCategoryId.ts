import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectScholarshipsByCategoryId(categoryId: string) : Promise<Scholarship[]> {
    try {
        console.log(categoryId)
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, (SELECT COUNT(likeScholarshipId) FROM `like` WHERE scholarship.scholarshipId = `like`.likeScholarshipId) AS likeCount FROM scholarship INNER JOIN scholarshipCategory ON scholarshipCategory.scholarshipCategoryScholarshipId = scholarship.scholarshipId WHERE scholarshipCategory.scholarshipCategoryCategoryId = uuid_to_bin(:categoryId)"
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {categoryId})
        return result[0] as Scholarship[]
    } catch (error) {
        throw error
    }
}