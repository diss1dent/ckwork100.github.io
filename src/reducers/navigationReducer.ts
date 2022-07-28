import * as types from '../actions/actionTypes';
import {PayloadAction} from "@reduxjs/toolkit";

export interface MenuItem {
    title: string,
    route: string
}

const initialState = {
    activeMenu: "",
    menu: [
        {
            title: "Кукурудза",
            route: 'corn'
        },
        {
            title: "Ріпак озимий",
            route: 'rapeseed'
        }
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