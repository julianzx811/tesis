import { createStore, combineReducers } from "redux";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

export const store = createStore(rootReducer);
