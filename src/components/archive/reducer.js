import {combineReducers, createStore} from "redux";
import counterReducer from "./counter/counterReducer";
import menuReducer from "./menu/menuReducer";
import archiveReducer from "./archiveReducer";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   menu: menuReducer
// });
const 

export const store = createStore(archiveReducer);