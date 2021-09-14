import scholarships from "./scholarships"
import auth from "./auth";
import categories from "./category"
import scholarshipCategory from "./scholarshipCategory";
import likes from "./like"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({scholarships, categories, scholarshipCategory, auth, likes})

export const store = configureStore({reducer})
