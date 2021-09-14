import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {fetchAuth} from "./auth";
import {fetchUserByUserId, getUserByUserId} from "./user";
import _ from "lodash";
import {fetchLikeByLikeScholarshipId} from "./like";
const scholarshipSlice = createSlice({
    name: "scholarship",
    initialState: [],
    reducers: {
        getAllScholarships: (scholarships, action) => {
            return action.payload
        },
        getAllScholarshipsByUserId: (scholarships, action) => {
            return action.payload
        }
    },
})

// Make our actions callable as function getAllScholarships.
export const {getAllScholarships, getAllScholarshipsByUserId} = scholarshipSlice.actions

// We use export default here so that if something imports this file, they will get it by default
export default scholarshipSlice.reducer

//Create an export to allow async calls to our action
export const fetchAllScholarships = () => async dispatch => {
    const {data} = await httpConfig(`/apis/scholarships/`)
    dispatch(getAllScholarships(data))
}

export const fetchScholarshipsByUserId = () => async (dispatch, getState) => {

        const {data} = await httpConfig.get(`/apis/scholarships/userId/`)
        console.log(data)
        await dispatch(getAllScholarshipsByUserId(data))
    const likeScholarshipIds = _.uniq(_.map(getState().scholarships, "scholarshipId"));
    console.log("likescholarshipId", likeScholarshipIds)
    likeScholarshipIds.forEach(id => dispatch(fetchLikeByLikeScholarshipId(id)));
}

