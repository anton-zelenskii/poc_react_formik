import { combineReducers } from "redux";
import { atlasFormReducer } from "./atlasFormReducer";

const rootReducer = combineReducers({ atlasFormReducer });

export default rootReducer;
