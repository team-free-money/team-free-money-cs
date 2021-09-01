import {connect} from "../database.utils";
import {ScholarshipCategory} from "../interfaces/ScholarshipCategory";

export async function insertScholarshipCategory(scholarshipCategory: ScholarshipCategory) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO scholarshipCategory(scholarshipCategoryCategoryId, scholarshipCategoryScholarshipId ) VALUES (UUID_TO_BIN(:categoryId), UUID_TO_BIN(:scholarshipId))';
        await mysqlConnection.execute(query, scholarshipCategory);
        return 'ScholarshipCategory Successfully Created'
    } catch (error) {
        throw error
    }
}