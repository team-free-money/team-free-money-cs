import {Scholarship} from "../interfaces/Scholarship";
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";

<<<<<<< HEAD

export async function selectScholarshipByScholarshipId(): Promise<Scholarship|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(scholarshipId) AS scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName FROM scholarship WHERE scholarshipId = UUID_TO_BIN(:scholarshipId)"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return scholarships.length === 1 ? {...scholarships[0]} : null;
=======
export async function selectScholarshipByScholarshipId(): Promise<Scholarship|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(scholarshipId) as scholarshipId, scholarshipAmount, scholarshipCriteria, scholarshipDeadline, scholarshipDescription, scholarshipLink, scholarshipName FROM scholarship WHERE scholarshipId = BIN_TO_UUID(scholarshipId)"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return result[0] as Scholarship[]
>>>>>>> develop
    }
    catch (error){
        throw error
    }
}