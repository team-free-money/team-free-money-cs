import scholarships from "./scholarships"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({scholarships})

export const store = configureStore({reducer})