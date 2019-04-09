import { combineReducers } from "redux";

import magicTypeReducer from "./magicTypeReducer";
import userReducer from "./userReducer";

export default combineReducers({
	magicTypeState: magicTypeReducer,
	userState: userReducer
});
