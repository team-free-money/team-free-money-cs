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
    const categories = getState().categories
    const category = categories.find(({categoryName}) => categoryName === name)
    console.log(category)
    for (const categoryName of categoryName) {
        const {data} = await httpConfig.get(`/apis/scholarships/categoryName/${categoryName}`)
        dispatch(setScholarshipCategory(data))
    }

    // console.log("data", data)
}

export default scholarshipCategorySlice.reducer