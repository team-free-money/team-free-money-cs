import scholarships from "./scholarships"
import auth from "./auth";
import categories from "./category"
import scholarshipCategory from "./scholarshipCategory";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({scholarships, categories, scholarshipCategory, auth})

export const store = configureStore({reducer})
