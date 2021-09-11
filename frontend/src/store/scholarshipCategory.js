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
            return action.payload
        }
    },
})

export const {getAllScholarshipCategories, setScholarshipCategory} = scholarshipCategorySlice.actions

export const fetchScholarshipByCategoryName = (name) => async (dispatch, getState) => {
    const result = await httpConfig("/apis/category/")
    const categories = result.data
    const category = categories.find(({categoryName}) => categoryName === name)
    console.log(category)

    if (category){
        const {data} = await httpConfig (`/apis/scholarships/categoryId/${category.categoryId}`)
        console.log("data", data)
        dispatch(setScholarshipCategory(data))
    }

}

export default scholarshipCategorySlice.reducer