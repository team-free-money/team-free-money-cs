import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {getAllScholarshipCategories} from "./scholarshipCategory";

const categorySlice = createSlice({
    name: "categories",
    initialState: [],
    reducers:  {
        getAllCategories: (categories, action) => {
            return action.payload
        }
    }
})

export const {
    getAllCategories
} = categorySlice.actions

export default categorySlice.reducer

export const fetchAllCategories = () => async (dispatch) => {
    const {data} = await httpConfig('/apis/category')
    dispatch (getAllCategories(data))
}