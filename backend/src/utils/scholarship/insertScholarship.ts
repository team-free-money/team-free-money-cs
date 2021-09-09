import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';

export async function insertScholarship(scholarship: Scholarship) : Promise<string>{
    console.log(scholarship)
try {
    const mySqlConnection = await connect()
    const mySqlQuery = "INSERT INTO scholarship(scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName) VALUES (UUID_TO_BIN(uuid()), :scholarshipAmount, :scholarshipCriteria, :scholarshipDeadline, :scholarshipDescription, :scholarshipLink, :scholarshipName)";
    await mySqlConnection.execute(mySqlQuery, scholarship);
    return 'Scholarship Successfully Created'
} catch (error) {
        console.error(error)
    throw error
}
}