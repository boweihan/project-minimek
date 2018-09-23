import { createReducer } from "common/utils/reducerUtils";

import { SELECT_MECH } from "./mechConstants";

const initialState = {
  currentMech: null
};

export function selectMech(state, payload) {
  const prevSelectedMech = state.currentMech;
  const newSelectedMech = payload.currentMech;

  const isSameMech = prevSelectedMech === newSelectedMech;

  return {
    currentMech: isSameMech ? null : newSelectedMech
  };
}

export default createReducer(initialState, {
  [SELECT_MECH]: selectMech
});
