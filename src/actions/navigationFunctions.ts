import * as types from "./actionTypes";

export const setActiveMenu = (activeMenu: string) => ({
    type: types.SET_ACTIVE_MENU,
    payload: {activeMenu}
});
