import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig"

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