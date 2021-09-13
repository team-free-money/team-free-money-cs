import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";
import {Scholarship} from "../interfaces/Scholarship";


export const selectAllLikes = async () => {
    try {
        const mysqlConnection = await connect();
        const [rows] = await mysqlConnection.execute ('SELECT BIN_TO_UUID(likeUserId) as likeUserId, BIN_TO_UUID(likeScholarshipId) as likeScholarshipId FROM `like`')
        return rows;
    } catch (error){
        console.log(error)
    }
}


