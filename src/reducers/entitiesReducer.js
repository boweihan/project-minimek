import { createReducer } from "common/utils/reducerUtils";
import { DATA_LOADED } from "features/tools/toolConstants";

import schema from "app/schema";

const initialState = schema.getEmptyState();

export function loadData(state, payload) {
  const session = schema.session(state);
  const { Pilot } = session;
  const { pilots } = payload;
  pilots.forEach(pilot => Pilot.parse(pilot));
	return session;
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData
});
