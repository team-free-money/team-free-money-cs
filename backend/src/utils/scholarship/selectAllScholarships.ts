import {Scholarship} from "../interfaces/Scholarship";
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectAllScholarships(scholarshipId: string): Promise<Scholarship|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipApproved, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName, scholarshipCategoryName FROM scholarship WHERE scholarshipId = UUID_TO_BIN(:scholarshipId)"
        const result = await mySqlConnection.execute(sqlQuery, {scholarshipId} )as RowDataPacket[]
        const rows: Scholarship[] = result[0] as Scholarship[]
        return rows.length === 1 ? {...rows[0]} : null;
    }
    catch (error){
        throw error
    }
}

