import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertScholarship(scholarship: Scholarship) : Promise<string>{
try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO scholarship(scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, scholarshipCategoryName) VALUES (UUID_TO_BIN(:scholarshipId), :scholarshipAmount, :scholarshipCriteria, :scholarshipDeadline, :scholarshipDescription, :scholarshipLink, :scholarshipName, :scholarshipCategoryName)";
    await mySqlConnection.execute(mySqlQuery, scholarship);
    return 'Scholarship Successfully Created'
} catch (error) {
    throw error
}
}