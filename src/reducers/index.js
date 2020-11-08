//  redcuer index js

import { combineReducers } from "redux";
import incomeReducer from "./income";

export default combineReducers({
    incomes : incomeReducer
})