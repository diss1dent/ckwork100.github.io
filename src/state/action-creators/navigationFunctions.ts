import * as types from "../action-types/actionTypes";
import {MenuItem} from "../interfaces/navigationIntefaces";

export const setActiveMenu = (activeMenu: MenuItem) => ({
    type: types.NavigationActionType.SET_ACTIVE_MENU,
    payload: {activeMenu}
});

