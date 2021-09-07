import {Scholarship} from "../../interfaces/Scholarship";
import {connect} from "../../database.utils";
import {RowDataPacket} from 'mysql2';

export async function selectScholarshipByCategoryNameWomen(categoryName: string) : Promise<Scholarship[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName FROM scholarship INNER JOIN scholarshipCategory ON scholarship.scholarshipId = scholarshipCategory.scholarshipCategoryScholarshipId INNER JOIN category ON scholarshipCategory.scholarshipCategoryCategoryId = category.categoryId WHERE categoryName = 'Women'";
        const result = await <RowDataPacket>mySqlConnection.execute(mySqlQuery, {categoryName})
        return result[0] as Scholarship[]
    } catch (error) {
        throw error
    }
}