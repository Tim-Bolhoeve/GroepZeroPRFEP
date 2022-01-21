import {createStore} from "redux";
import archiveReducer from "./archiveReducer";

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   menu: menuReducer
// });

export const store = createStore(archiveReducer);