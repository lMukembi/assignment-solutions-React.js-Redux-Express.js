import { combineReducers } from "redux";

import Users from "./Queries/Reducers/Users";
import Posts from "./Queries/Reducers/Posts";

const rootReducer = combineReducers({
  Users,
  Posts,
});
export default rootReducer;
