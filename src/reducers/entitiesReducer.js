import { createReducer } from "common/utils/reducerUtils";
import { DATA_LOADED } from "features/tools/toolConstants";

import schema from "app/schema";

const initialState = schema.getEmptyState();

export function loadData(state, payload) {
  const session = schema.session(state);
  const { Pilot, MechDesign, Mech } = session;
  const { pilots, designs, mechs } = payload;

  pilots.forEach(pilot => Pilot.parse(pilot));
  designs.forEach(design => MechDesign.parse(design));
  mechs.forEach(mech => Mech.parse(mech));
	return session.state;
}

export default createReducer(initialState, {
  [DATA_LOADED]: loadData
});
