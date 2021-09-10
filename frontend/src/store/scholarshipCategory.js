import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../utils/httpConfig";

const scholarshipCategorySlice = createSlice({
    name: "scholarshipCategory",
    initialState: [],
    reducers: {
        getAllScholarshipCategories: (scholarshipCategory, action) => {
            return action.payload
        },
        setScholarshipCategory: (scholarshipCategory, action) => {
            scholarshipCategory.push(...action.payload)
        }
    },
})

export const {getAllScholarshipCategories, setScholarshipCategory} = scholarshipCategorySlice.actions

export const fetchScholarshipByCategoryName = (name) => async (dispatch, getState) => {
    const {data} = await httpConfig("/apis/category/")
    const category = data.find(({categoryName}) => categoryName === name)
    console.log(data)

    // console.log("data", data)
}

export default scholarshipCategorySlice.reducer