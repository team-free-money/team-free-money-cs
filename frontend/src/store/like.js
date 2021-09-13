import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";


const likeSlice = createSlice({
    name: "likes",
    initialState: [],
    reducers: {
        getLikeAll: (posts, action) => {
            return action.payload
        },
        getLikeByLikeScholarshipId: (post, action) => {
            return action.payload
        }
    }
})

export const {getLikeAll, getLikeByLikeScholarshipId} = likeSlice.actions
export const fetchAllLikes = () => async dispatch => {
    const {data} = await httpConfig(`/apis/like/`)
    dispatch(getLikeAll(data))
}

export const fetchLikeByLikeScholarshipId = (likeUserId) => async dispatch => {
    const{data} = await httpConfig(`/apis/like/scholarship/user/${likeUserId}`)
    dispatch(getLikeByLikeScholarshipId(data))
}

export default likeSlice.reducer