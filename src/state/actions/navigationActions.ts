import * as types from "../action-types/actionTypes";
import {MenuItem} from "../interfaces/navigationIntefaces";

export interface SetActiveMenuAction {
  type: typeof types.NavigationActionType.SET_ACTIVE_MENU,
  payload: MenuItem
}

export type NavigationActions = SetActiveMenuAction