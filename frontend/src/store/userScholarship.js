import {createSlice} from "@reduxjs/toolkit";
import {fetchAuth} from "./auth";
import {httpConfig} from "../utils/httpConfig";
import user from "./user";

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

export const fetchScholarshipByUserId = (name) => async (dispatch, getState) => {
    const result = await httpConfig("/apis/scholarships/user")
    const userScholarships = result.data
    const userScholarship = userScholarships.find(({userId}) => userId === name)
    console.log(userScholarship)

    if (userScholarship){
        const {data} = await httpConfig (`/apis/scholarships/user/${user.userId}`)
        console.log("data", data)
        dispatch(setUserScholarships(data))
    }

}

export default userScholarshipSlice.reducer
