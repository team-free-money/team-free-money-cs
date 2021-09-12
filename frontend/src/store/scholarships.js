import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {fetchAuth} from "./auth";
import {fetchUserByUserId} from "./user";
const scholarshipSlice = createSlice({
    name: "scholarship",
    initialState: [],
    reducers: {
        getAllScholarships: (scholarships, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllScholarships.
export const {getAllScholarships} = scholarshipSlice.actions

// We use export default here so that if something imports this file, they will get it by default
export default scholarshipSlice.reducer

//Create an export to allow async calls to our action
export const fetchAllScholarships = () => async dispatch => {
    const {data} = await httpConfig(`/apis/scholarships/`)
    dispatch(getAllScholarships(data))
}

