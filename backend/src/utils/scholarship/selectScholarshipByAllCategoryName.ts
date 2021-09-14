import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectScholarshipByAllCategoryName(categoryName: string) : Promise<Scholarship[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, (SELECT COUNT(likeScholarshipId) FROM `like` WHERE scholarship.scholarshipId = `like`.likeScholarshipId) AS likeCount FROM category INNER JOIN scholarshipCategory ON scholarshipCategory.scholarshipCategoryCategoryId = categoryID INNER JOIN scholarship ON scholarshipCategory.scholarshipCategoryScholarshipId = scholarship.scholarshipId WHERE categoryName = 'Women' OR categoryName = 'General' OR categoryName = 'Hispanic' OR categoryName ='Native-American' OR categoryname = 'Veteran'";
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {categoryName})
        return result[0] as Scholarship[]
    } catch (error) {
        throw error
    }
}