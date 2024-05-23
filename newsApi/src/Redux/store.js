import {  applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import newReducer from "./Reducer";
const store = createStore(newReducer,applyMiddleware(thunk))
export default store