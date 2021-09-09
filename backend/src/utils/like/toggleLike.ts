import {Scholarship} from "../interfaces/Scholarship";
import {connect} from "../database.utils";
import {Like} from "../interfaces/Like";

//TODO REWRITE this whole thing
export async function toggleLike(like: Like) : Promise<string> {
    try {
        console.log('like', like)
        const mysqlConnection = await connect();
        const mySqlSelectQuery = 'SELECT BIN_TO_UUID(likeUserId) as likeUserId, BIN_TO_UUID(likeScholarshipId) as likeScholarshipId FROM `like` WHERE likeUserId = UUID_TO_BIN(:likeUserId) AND likeScholarshipId = UUID_TO_BIN(:likeScholarshipId)'

        const [likeRows] = await mysqlConnection.execute(mySqlSelectQuery, like)
        // @ts-ignore
        console.log('likeRows', likeRows)
        // @ts-ignore
        if (likeRows[0]){

            const mySqlConnection = await connect()
            const mySqlDelete = 'DELETE FROM `like` WHERE likeUserId = UUID_TO_BIN(:likeUserId) AND likeScholarshipId = UUID_TO_BIN(:likeScholarshipId)'
            const [deleteRows] = await mySqlConnection.execute(mySqlDelete, like)
            console.log('REMOVED LIKE')



        }else{

            const mySqlConnection = await connect()
            const mySqlQuery = "INSERT INTO `like`(likeUserId, likeScholarshipId) VALUES(UUID_TO_BIN(:likeUserId), UUID_TO_BIN(:likeScholarshipId), NOW())";

            const [rows] = await mySqlConnection.execute(mySqlQuery, like)
            console.log('ADDED LIKE')

        }


        return "Like toggled successfully"
    } catch (error) {
        throw error
    }
}
