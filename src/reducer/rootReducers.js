import changeTheNumber from "./reducer";
import multiply from './multiply';

import { combineReducers } from "redux";
const rootReducers = combineReducers(
    {
    //   myNumber:changeTheNumber
    changeTheNumber: changeTheNumber,
    multiply:multiply
    }
);

export default rootReducers;