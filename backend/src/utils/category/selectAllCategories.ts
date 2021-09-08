import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {Category} from "../interfaces/Category";


export async function selectAllCategories(): Promise<Category[]> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(categoryId) as categoryId, categoryName FROM category"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        return result[0] as Category[]
    }
    catch (error){
        throw error
    }
}