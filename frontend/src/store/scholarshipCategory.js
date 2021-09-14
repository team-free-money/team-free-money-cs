import {createSlice} from "@reduxjs/toolkit"
import {httpConfig} from "../utils/httpConfig";
import {fetchLikeByLikeScholarshipId} from "./like";
import _ from "lodash";
import category from "./category";

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

export const fetchScholarshipByCategoryName = (id) => async (dispatch, getState) => {

        const {data} = await httpConfig (`/apis/scholarships/categoryId/${id}`)
        console.log("data", data)
        dispatch(setScholarshipCategory(data))


}

export const fetchScholarshipsByCategoryAndLikes = (name) => async (dispatch, getState) => {
    const result = await httpConfig("/apis/category/")
    const categories = result.data
    const category = categories.find(({categoryName}) => categoryName === name)
    console.log(category)
    // todo grab auth from getState. If we get auth, getLikeScholarshipByScholarshipLikeId
    if (category) {
        await dispatch(fetchScholarshipByCategoryName(category.categoryId))
        const likeScholarshipIds = _.uniq(_.map(getState().scholarshipCategory, "likeUserId"));
        likeScholarshipIds.forEach(id => dispatch(fetchLikeByLikeScholarshipId(id)));
    }


}


export default scholarshipCategorySlice.reducer