import * as types from '../action-types/actionTypes';
import {PayloadAction} from "@reduxjs/toolkit";
import {MenuItem} from "../interfaces/navigationIntefaces";
import {NavigationActions} from "../actions/navigationActions";

export const PRODUCT_CATEGORIES = {
    corn: 'corn',
    rapeseed: 'rapeseed',
}
export const MENU_ITEMS:MenuItem[] = [
    {
        title: 'Кукурудза',
        route: '/catalog/corn',
        category: PRODUCT_CATEGORIES.corn
    },
    {
        title: 'Ріпак озимий',
        route: '/catalog/rapeseed',
        category: PRODUCT_CATEGORIES.rapeseed
    }
]

const initialState = {
    activeMenu: MENU_ITEMS[0],
    menu: MENU_ITEMS
};

const navigationReducer = function(state = initialState, action: PayloadAction<NavigationActions>) {

    switch(action.type) {
        case types.NavigationActionType.SET_ACTIVE_MENU:
            return Object.assign({}, state, {
                ...action.payload
            });
    }

    return state;

}

export default navigationReducer;