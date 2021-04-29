import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./modules/cvAppDuck";

const loggerMiddleware = createLogger(); // initialize logger


const store = createStore(reducer, applyMiddleware(thunkMiddleware,loggerMiddleware));
export default store;
