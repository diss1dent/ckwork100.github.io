import {combineReducers} from "@reduxjs/toolkit";
import navigationReducer from "./navigationReducer";

export const rootReducer = combineReducers({
    navigationState: navigationReducer
});
