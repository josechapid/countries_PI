import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"
import reducer from "../reducer/reducer"

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store= createStore(reducer, enhancer)

export default store