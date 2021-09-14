import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth} from "./auth";
import {httpConfig} from "../utils/httpConfig";
import user from "./user";
import _ from "lodash";
import {fetchLikeByLikeScholarshipId} from "./like";
import {fetchScholarshipByCategoryName} from "./scholarshipCategory";

const userScholarshipSlice = createSlice({
    name: "userScholarship",
    initialState: [],
    reducers: {
        getUserScholarships: (userId, action) => {
            return action.payload
        },
        setUserScholarships: (userId, action) => {
            return action.payload
        }
    },
})

export const {getUserScholarships, setUserScholarships} = userScholarshipSlice.actions

export const fetchScholarshipByUserId = (userId) => async (dispatch, getState) => {



        const {data} = await httpConfig (`/apis/scholarships/userId/`)
        console.log("data", data)
       await dispatch(setUserScholarships(data))



}

export default userScholarshipSlice.reducer
