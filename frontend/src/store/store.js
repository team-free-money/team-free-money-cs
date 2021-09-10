import scholarships from "./scholarships"
import categories from "./category"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({scholarships, categories})

export const store = configureStore({reducer})
