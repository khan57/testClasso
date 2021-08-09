import { createStore } from "redux";
import counterReducer from "./auth/reducers";

export default createStore(counterReducer);
