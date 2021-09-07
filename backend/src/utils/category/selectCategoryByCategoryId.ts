import {Category} from "../interfaces/Category";
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectCategoryByCategoryId(): Promise<Category|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(categoryId) AS categoryId, categoryName FROM category WHERE categoryId = UUID_TO_BIN(:categoryId)"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return categories.length === 1 ? {...categories[0]} : null;
    }
    catch (error){
        throw error
    }
}