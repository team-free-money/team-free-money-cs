import scholarships from "./scholarships"
import categories from "./category"
import scholarshipCategory from "./scholarshipCategory";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({scholarships, categories, scholarshipCategory})

export const store = configureStore({reducer})
