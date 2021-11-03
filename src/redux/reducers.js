import { combineReducers } from "redux";
import todo from "./todo/reducers";

const reducers = combineReducers({
  todo,
});

export default reducers;
