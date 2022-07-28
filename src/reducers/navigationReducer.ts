import * as types from '../actions/actionTypes';
import {PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    activeMenu: "",
    menu: [
        "Кукурудза",
        "Ріпак озимий"
    ]
};

const navigationReducer = function(state = initialState, action: PayloadAction<{}>) {

    switch(action.type) {
        case types.SET_ACTIVE_MENU:
            return Object.assign({}, state, {
                ...action.payload
            });
    }

    return state;

}

export default navigationReducer;