import {Category} from "../interfaces/Category";
import  {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";


export async function selectCategoryByCategoryName(): Promise<Category|null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT categoryName AS categoryId, categoryName FROM category WHERE category = categoryName"
        const result = await mySqlConnection.execute(mySqlQuery)as RowDataPacket[]
        // @ts-ignore
        return categories.length === 1 ? {...categories[0]} : null;
    }
    catch (error){
        throw error
    }
}