import {connect} from "../database.utils";
import {Scholarship} from "../interfaces/Scholarship";
import {RowDataPacket} from 'mysql2';
import {Category} from

export async function selectScholarshipByCategoryId(categoryId: string): Promise<Category/null>