import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";
import pilotsReducer from "features/pilots/pilotsReducer";
import mechReducer from "features/mechs/mechReducer";


const rootReducer = combineReducers({
  entities: entitiesReducer,
  unitInfo: unitInfoReducer,
  tabs: tabReducer,
	pilots: pilotsReducer,
	mechs: mechReducer
});

export default rootReducer;
