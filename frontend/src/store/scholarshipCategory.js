import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";

const scholarshipCategorySlice = createSlice({
    name: "scholarshipCategory",
    initialState: [],
    reducers: {
        getAllScholarshipsCategories: (scholarshipCategory,action) => {
            return action.payload
        },
        setScholarshipCategory: (scholarshipCategory, action) => {
            scholarshipCategory.push(...action.payload)
        }
    },
})

export const {getAllScholarshipCategories, setScholarshipCategory} = scholarshipCategorySlice.actions

export const fetchScholarshipCategoryByScholarshipsIds = () => async (dispatch, getState) => {
    const scholarshipIds = getState().scholarship.scholarshipId
    for (const scholarshipId of scholarshipIds) {
        const {data} = await httpConfig.get(`/apis/scholarship-category/scholarshipId/`)
    }
}