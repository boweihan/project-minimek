import { ORM } from "redux-orm";
import Pilot from "features/pilots/Pilot";
import MechDesign from "features/mechs/MechDesign";
import Mech from "features/mechs/Mech";

const schema = new ORM();
schema.register(Pilot, MechDesign, Mech);

export default schema;
