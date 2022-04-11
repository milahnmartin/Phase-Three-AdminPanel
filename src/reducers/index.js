import view_reducer from "./main-view";
import query_reducer from "./query-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    view_reducer,
    query_reducer,
});

export default rootReducer;
