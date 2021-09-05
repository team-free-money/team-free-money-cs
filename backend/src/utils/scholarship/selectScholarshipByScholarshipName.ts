import {Scholarship} from "../interfaces/Scholarship";
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectScholarshipByScholarshipName(): Promise<Scholarship|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName FROM scholarship"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return scholarships.length === 1 ? {...scholarships[0]} : null;
    }
    catch (error){
        throw error
    }
}