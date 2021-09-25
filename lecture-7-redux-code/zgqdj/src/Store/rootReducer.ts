import { combineReducers } from "redux";
import bankingReducer from "./bankingReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  banking: bankingReducer
  // todo: todoReducer
});

export type State = ReturnType<typeof rootReducer>;

export default rootReducer;
