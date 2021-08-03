import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";



const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true
})) || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
  ))

export default store;