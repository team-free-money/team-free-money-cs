import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import * as likes from "lodash";


const likeSlice = createSlice({
    name: "likes",
    initialState: [],
    reducers: {
        getLikeAll: (likes, action) => {
            return action.payload
        },
        getLikeByLikeScholarshipId: (likes, action) => {
            likes.push (action.payload)
        }
    }
})

export const {getLikeAll, getLikeByLikeScholarshipId} = likeSlice.actions
export const fetchAllLikes = () => async dispatch => {
    const {data} = await httpConfig(`/apis/like/`)
    dispatch(getLikeAll(data))
}

export const fetchLikeByLikeScholarshipId = (likeScholarshipId) => async dispatch => {
    const{data} = await httpConfig(`/apis/like/likeUserId/${likeScholarshipId}`)
    dispatch(getLikeByLikeScholarshipId(data))
}

export default likeSlice.reducer