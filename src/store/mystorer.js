import { applyMiddleware, combineReducers, createStore } from "redux";
import ProductReducer from "../reducers/ProductReducer";
import thunk from "redux-thunk";
import EmployeeReducer from "../reducers/EmployeeReducer";


const rootReducer = combineReducers({
    "product" : ProductReducer,
    "employee" : EmployeeReducer
});

const mystorer = createStore(rootReducer,applyMiddleware(thunk));
export default mystorer;