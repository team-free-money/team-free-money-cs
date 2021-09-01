import {connect} from "../database.utils";
import {Category} from "../interfaces/Category";

export async function insertCategory(category: Category) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO category(categoryId, categoryName) VALUES (UUID_TO_BIN(:categoryId), :categoryName)';
        await mysqlConnection.execute(query, category);
        return 'Category Successfully Created'
    } catch (error) {
        throw error
    }
}