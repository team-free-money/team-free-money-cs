import {connect} from "../database.utils";
import {ScholarshipCategory} from "../interfaces/ScholarshipCategory";

export async function insertScholarshipCategory(scholarshipCategory: ScholarshipCategory) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO scholarshipCategory(scholarshipCategoryCategoryId, scholarshipCategoryScholarshipId ) VALUES (UUID_TO_BIN(:scholarshipCategoryCategoryId), UUID_TO_BIN(:scholarshipCategoryScholarshipId))';
        await mysqlConnection.execute(query, scholarshipCategory);
        return 'ScholarshipCategory Successfully Created'
    } catch (error) {
        throw error
    }
}