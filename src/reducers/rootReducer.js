import { combineReducers } from "redux";
import tabReducer from "features/tabs/tabReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
<<<<<<< HEAD:src/reducers/rootReducer.js
  tabs: tabReducer
=======
    unitInfo : unitInfoReducer,
    tabs : tabReducer,
>>>>>>> bce3a2d... Add initial unit info reducer and connection:src/app/reducers/rootReducer.js
});

export default rootReducer;
